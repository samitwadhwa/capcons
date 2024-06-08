import React from 'react';

const ProductScreen: React.FC = () => {
  return (
    <div className='flex justify-around  '>
    <div className="bg-[#2A2A2E] p-4 rounded-md shadow-md space-y-4 w-[51rem]">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-white">Order</h2>
          <div className="mt-2 text-gray-400">
            <div>Product 1 (#5246663)</div>
            <div>Size: XL</div>
            <div>Colour: Blue</div>
            <div>Store ID: Stormnorm-50C4</div>
          </div>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Change Status</button>
      </div>

      <div className="bg-[#3A3A3E] p-4 rounded-md">
        <h3 className="text-lg font-semibold text-white">Pricing Details</h3>
        <div className="mt-2 text-gray-400 space-y-2">
          <div>IGST/CGST/SGST: CGST15 150 150</div>
          <div>MPR: $5000.00</div>
          <div>Discount: $250.00 (25%)</div>
          <div>Payment mode: Credit card</div>
          <div>Promo code: CH4493</div>
        </div>
      </div>

      <div className="bg-[#3A3A3E] p-4 rounded-md">
        <h3 className="text-lg font-semibold text-white">Delivery Details</h3>
        <div className="mt-2 text-gray-400 space-y-2">
          <div>Invoice number: CGST15 150 150</div>
          <div>Logistic partner: Mayank</div>
          <div>AWB number: xfgejdpqd</div>
          <div>Delivery date: 21-05-2024</div>
          <div>Shipping charges: $5.00</div>
        </div>
      </div>

      <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full">Download Invoice</button>

    </div>
      <div className="bg-[#3A3A3E] p-4 rounded-md">
        <h3 className="text-lg font-semibold text-white">Timeline</h3>
        <div className="mt-2 text-gray-400 space-y-2">
          <div>Payment created: Tue, 28 Nov, 2023, 1:30PM</div>
          <div>Payment authorized: Tue, 28 Nov, 2023, 1:30PM</div>
          <div>Payment captured: Tue, 28 Nov, 2023, 1:30PM</div>
          <div>Payment captured: Tue, 28 Nov, 2023, 1:30PM</div>
          <div>Payment captured: Tue, 28 Nov, 2023, 1:30PM</div>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4">Return</button>
      </div>
    </div>
  ); 
};

export default ProductScreen;