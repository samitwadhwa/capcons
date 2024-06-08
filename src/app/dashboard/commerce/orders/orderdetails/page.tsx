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
                        <div className='p-4 space-y-2'>
                            <div className="flex justify-between">
                                <p>Payment Type:</p>
                                <p>Credit card</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Payment Method:</p>
                                <p>Razorpay</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Payment ID:</p>
                                <p>455RT</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total Price:</p>
                                <p>6.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Discount:</p>
                                <p>120</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Promo:</p>
                                <p>CH034</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping Charges:</p>
                                <p>150.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total Amount:</p>
                                <p>450.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Sub Total Amount:</p>
                                <p>450.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 h-fit">
                        <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Customer Details</h5>
                        <div className='p-4 space-y-2'>
                            <div className="flex justify-between">
                                <p>Name:</p>
                                <p>Ramesh</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Phone Number:</p>
                                <p>954493434</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Address:</p>
                                <p>Laxmi Nagar, Delhi, 110092</p>
                            </div>
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
