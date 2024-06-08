// components/OrderDetail.tsx
import React from 'react';

const OrderDetail: React.FC = () => {
    return (
        <div className="bg-transparent text-white p-4 rounded-lg flex flex-col gap-8">
            <div className="flex justify-between items-center bg-[#2A2A2E] w-fit p-4 gap-4">
                <div>
                    <p className="text-2xl font-semibold">$2,297.00</p>
                    <p>Created on 29 Jun, 2023, 10:40AM</p>
                </div>
                <span className="bg-purple-600 text-white p-1 rounded">Authorized</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-8">
                    <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 h-fit">
                        <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Payment Mode</h5>
                        <div className='p-4'>
                            <p>Payment Type: Credit card</p>
                            <p>Payment Method: Razorpay</p>
                            <p>Payment ID: 455RT</p>
                            <p>Total Price: 6.99</p>
                            <p>Discount: 120</p>
                            <p>Promo: CH034</p>
                            <p>Shipping Charges: 150.99</p>
                            <p>Total Amount: 450.99</p>
                            <p>Sub Total Amount: 450.99</p>
                        </div>
                    </div>
                    <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 h-fit">
                        <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Customer Details</h5>
                        <div className='p-4'>
                            <p>Name: Ramesh</p>
                            <p>Phone Number: 954493434</p>
                            <p>Address: D-197, Street Number 8, Ramesh Park, Laxmi Nagar, Delhi, 110092</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-[#2A2A2E] rounded-lg flex flex-col gap-4">
                    <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Sub Orders</h5>
                    <div className="flex flex-col gap-4">
                        {Array(4).fill('').map((_, index) => (
                            <div key={index} className="bg-[#2A2A2E] p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <p>Product 1 (#524663)</p>
                                    <p>Size: XL</p>
                                    <p>Colour: Blue</p>
                                    <p>Store ID: Stormnorm-50C4</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <button className="bg-purple-600 text-white p-2 rounded mb-2">Order Status</button>
                                    <button className="bg-purple-600 text-white p-2 rounded">View Invoice</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
