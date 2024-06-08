import React from 'react';

const PaymentsTable: React.FC = () => {
  const data = [
    {
      orderId: '#24325',
      date: '29 Jun, 2023',
      subOrderId: 'SO-2346345',
      product: '#76433',
      quantity: 1,
      amount: '$600.00',
      paymentMethod: 'UPI',
      customer: 'Ramesh',
      phone: '9546881231',
      email: 'ramesh@gmail.com',
      location: 'Delhi',
      pincode: '900034',
      paymentId: '#76433',
      status: 'Authorized',
    },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">Payment</button>
          <button className="px-4 py-2 ml-2 text-purple-600">Refund</button>
        </div>
        <div className="bg-transparent text-white p-4 rounded-lg flex flex-wrap gap-4">
            <div className="flex flex-col">
                <label htmlFor="date-range" className="text-sm">Date Range</label>
                <select id="date-range" className="bg-[#2A2A2E] text-white p-2 rounded">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="status" className="text-sm">Status</label>
                <select id="status" className="bg-[#2A2A2E] text-white p-2 rounded">
                    <option>All</option>
                    <option>Authorized</option>
                    <option>Pending</option>
                    <option>Failed</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="payment-method" className="text-sm">Payment Method</label>
                <select id="payment-method" className="bg-[#2A2A2E] text-white p-2 rounded">
                    <option>All</option>
                    <option>Credit Card</option>
                    <option>UPI</option>
                    <option>Net Banking</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="payment-id" className="text-sm">Payment ID</label>
                <input id="payment-id" type="text" className="bg-[#2A2A2E] text-white p-2 rounded" placeholder="Search" />
            </div>
            <div className="flex flex-col justify-end">
                <button className="bg-purple-600 text-white p-2 rounded mt-auto">Search</button>
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
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Delivery</th>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-4 py-2">{item.orderId}</td>
                <td className="px-4 py-2">{item.subOrderId}</td>
                <td className="px-4 py-2">{item.product} Qty: {item.quantity}</td>
                <td className="px-4 py-2">{item.amount} {item.paymentMethod}</td>
                <td className="px-4 py-2">{item.customer} <br /> {item.phone} <br /> {item.email}</td>
                <td className="px-4 py-2">{item.location} <br /> {item.pincode}</td>
                <td className="px-4 py-2">{item.paymentId}</td>
                <td className="px-4 py-2 text-purple-500">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsTable;
