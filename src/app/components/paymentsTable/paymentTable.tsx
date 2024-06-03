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
        <div>
          <button className="px-4 py-2 bg-gray-200 rounded">View All</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white">
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
