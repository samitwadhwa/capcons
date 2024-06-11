"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Order, SubOrder } from '@/app/Models/orders';

interface DisplayOrder {
  orderId: string;
  date: string;
  subOrderId: string;
  product: string;
  quantity: number;
  amount: string;
  paymentMethod: string;
  customer: string;
  phone: string;
  email: string;
  location: string;
  pincode: string;
  paymentId: string;
  status: string;
  invoiceNumber: string;
}

const PaymentsTable: React.FC = () => {
  const [data, setData] = useState<DisplayOrder[]>([]);
  const [filteredData, setFilteredData] = useState<DisplayOrder[]>([]);
  const [dateRange, setDateRange] = useState<string>('Last 7 days');
  const [status, setStatus] = useState<string>('All');
  const [paymentMethod, setPaymentMethod] = useState<string>('All');
  const [paymentId, setPaymentId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
 

  const router = useRouter();

  const handleClick = (orderId: string) => {
    router.push(`/dashboard/commerce/orders/${orderId}`);
  };

  const totalPages = 843;

  const fetchData = async (page: number) => {
    try {
      const response = await axios.get(`https://capcons.com/go-orders/getordersbycircle?circle=woodland&page=${page}`);
      console.log('API response:', response.data);

      if (response.data && Array.isArray(response.data.data)) {
        const orders: DisplayOrder[] = response.data.data.flatMap((order: Order) =>
          order.subOrders.map((subOrder: SubOrder) => ({
            orderId: order.orderId,
            date: new Date(order.createdAt).toLocaleDateString(),
            subOrderId: subOrder.subOrderId,
            product: subOrder.productId,
            quantity: subOrder.quantity,
            amount: `$${subOrder.finalPrice}`,
            paymentMethod: order.paymentType,
            customer: `${order.address.firstName} ${order.address.lastName}`,
            phone: order.phone,
            email: order.email,
            location: `${order.address.city}, ${order.address.state}`,
            pincode: order.address.pincode,
            paymentId: subOrder.subOrderId,
            status: subOrder.status[0]?.message || 'N/A',
            invoiceNumber: subOrder.invoiceNumber
          }))
        );
        setData(orders);
        setFilteredData(orders);
      } else {
        console.error('Expected an array in response.data.data but got:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleSearch = () => {
    let filtered = data;

    // Filter by date range
    const now = new Date();
    let startDate: Date;
    switch (dateRange) {
      case 'Last 7 days':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'Last 30 days':
        startDate = new Date(now.setDate(now.getDate() - 30));
        break;
      case 'Last 90 days':
        startDate = new Date(now.setDate(now.getDate() - 90));
        break;
      default:
        startDate = new Date(0); // a long time ago
    }

    filtered = filtered.filter(order => new Date(order.date) >= startDate);

    // Filter by status
    if (status !== 'All') {
      filtered = filtered.filter(order => order.status === status);
    }

    // Filter by payment method
    if (paymentMethod !== 'All') {
      filtered = filtered.filter(order => order.paymentMethod === paymentMethod);
    }

    // Filter by payment ID
    if (paymentId.trim() !== '') {
      filtered = filtered.filter(order => order.paymentId.includes(paymentId.trim()));
    }

    setFilteredData(filtered);
  };

  const handlePageChange = (newPage: number) => {
    console.log(newPage);
    console.log(totalPages);
    
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">Payment</button>
          <button className="px-4 py-2 ml-2 text-purple-600">Refund</button>
        </div>
        <div className="bg-transparent text-white p-4 rounded-lg flex items-center gap-2">
          <div className="flex flex-col">
            <label htmlFor="date-range" className="text-sm mb-1">Date Range</label>
            <select id="date-range" className="bg-[#2A2A2E] text-white p-2 rounded" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="text-sm mb-1">Status</label>
            <select id="status" className="bg-[#2A2A2E] text-white p-2 rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>All</option>
              <option>Authorized</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="payment-method" className="text-sm mb-1">Payment Method</label>
            <select id="payment-method" className="bg-[#2A2A2E] text-white p-2 rounded" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option>All</option>
              <option>Credit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="payment-id" className="text-sm mb-1">Payment ID</label>
            <input id="payment-id" type="text" className="bg-[#2A2A2E] text-white p-2 rounded" placeholder="Search" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} />
          </div>
          <div className="flex flex-col justify-end">
            <button className="bg-purple-600 text-white p-2 rounded mt-6" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 103.193 6.507l4.586 4.586a1 1 0 01-1.414 1.414l-4.586-4.586A4 4 0 108 4zM4 8a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#2A2A2E] text-white text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Sub-Order ID</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Payment Details</th>
              <th className="px-4 py-2">Invoice Number</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Delivery</th>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-4 py-2">{item.orderId}<br/>{item.date}</td>
                <td className="px-4 py-2 text-purple-500">{item.subOrderId}<br/>{item.amount}</td>
                <td className="px-4 py-2">{item.product} Qty: {item.quantity}</td>
                <td className="px-4 py-2">{item.amount}<br/>{item.paymentMethod}</td>
                <td className="px-4 py-2">{item.invoiceNumber}</td>
                <td className="px-4 py-2">{item.customer}<br/>{item.phone}<br/>{item.email}</td>
                <td className="px-4 py-2">{item.location}<br/>{item.pincode}</td>
                <td className="px-4 py-2">{item.paymentId}</td>
                <td className="px-4 py-2 text-purple-500">{item.status}</td>
                <td className="px-4 py-2"> 
                  <button className="bg-transparent text-[#D6A7FF] px-4 rounded" onClick={() => handleClick(item.orderId)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
          className="px-4 py-2 bg-purple-600 text-white rounded" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage} of {totalPages}</span>
        <button 
          className="px-4 py-2 bg-purple-600 text-white rounded" 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentsTable;
