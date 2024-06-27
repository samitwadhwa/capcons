"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOrderId } from '../../../../contexts/orderIdContext';
import currency from '../../../../../../public/images/currency.png';

interface SubOrder {
  subOrderId: string;
  productId: string;
  size: string;
  color: string;
  store: string;
  status: string;
  imageURL: string;
  price: string;
}

interface OrderDetails {
  orderId: string;
  createdAt: string;
  amount: string;
  status: string;
  paymentType: string;
  paymentMethod: string;
  paymentId: string;
  totalPrice: number;
  discount: number;
  promo: string;
  shippingCharges: number;
  totalAmount: number;
  subTotalAmount: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  subOrders: SubOrder[];
  finalAmount: string;
  donationAmount: number;
}
interface AddressDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  landmark: string;
  addressType: string;
  phone: string;
}

const OrderDetail: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [addressDetails, setAddressDetails] = useState<AddressDetails | null>(null);

  const [loading, setLoading] = useState(true);
  const { orderId , setOrderId } = useOrderId();
  
  useEffect(() => {
    const storedOrderId = localStorage.getItem('orderId');
    if (storedOrderId) {
      setOrderId(storedOrderId);
    }
  }, []);

  useEffect(() => {
    if (orderId) {
      localStorage.setItem('orderId', orderId);

      // Append a unique query string to prevent caching
      const uniqueQueryString = `&unique=${new Date().getTime()}`;

      let token: string | null = null;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('credential');
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      axios.get(`https://capcons.com/go-orders/getuserorder/${orderId}?circle=woodland${uniqueQueryString}` , config)
        .then(response => {
          console.log(response.data);
          setAddressDetails(response.data.data.address);
          setOrderDetails(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching order details:', error);
          setLoading(false);
        });
    }
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orderDetails) {
    return <div>No order details found.</div>;
  }

  return (
    <div className="bg-transparent text-white p-4 rounded-lg flex flex-col gap-8">
      <div className="flex items-center bg-[#2A2A2E] w-[38.8rem] p-4 gap-4">
        <div className="flex-1">
          <h3 className="text-h3 h3 font-semibold flex items-center"><img src={currency.src} alt="" className='w-6 h-6' />{orderDetails.amount}</h3>
          <p>Created on {new Date(orderDetails.createdAt).toLocaleString()}</p>
        </div>
        <span className="bg-[#62447D] text-white p-1 rounded">Authorised</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 h-fit w-[38.8rem]">
            <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Payment Mode</h5>
            <div className='p-4 space-y-2'>
              <div className="flex justify-between">
                
                <p>Payment Type:</p>
                <p>{orderDetails.paymentType}</p>
              </div>
              <div className="flex justify-between">
                <p>Payment Method:</p>
                <p>{orderDetails.paymentMethod}</p>
              </div>
              <div className="flex justify-between">
                <p>Payment ID:</p>
                <p>{orderDetails.paymentId}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Price:</p>
                <p className='flex items-center'><img src={currency.src} alt="" className='w-4 h-4' />{orderDetails.amount}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount:</p>
                <p className='flex items-center'><img src={currency.src} alt="" className='w-4 h-4' />{orderDetails.discount ? orderDetails.discount : '0'}</p>
              </div>
              <div className="flex justify-between">
                <p>Promo:</p>
                <p>{orderDetails.promo}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Charges:</p>
                <p className='flex items-center'><img src={currency.src} alt="" className='w-4 h-4' />{orderDetails.shippingCharges ? orderDetails.shippingCharges : '0'}</p>
              </div>
              <div className="flex justify-between">
                <p>Donation:</p>
                <p className='flex items-center' > <img src={currency.src} alt="" className='w-4 h-4' />{orderDetails.donationAmount}</p>
              </div>
              <hr className="border-white-700" />
              <div className="flex justify-between">
                <p>Total Amount:</p>
                <p className='flex items-center'  ><img src={currency.src} alt="" className='w-4 h-4' /> {orderDetails.finalAmount}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 h-fit w-[38.8rem]">
            <h5 className="text-h5 h5 font-semibold text-white bg-primary p-2 rounded">Customer Details</h5>
            <div className='p-4 space-y-2'>
              <div className="flex justify-between">
                <p>Name:</p>
                <p>{addressDetails?.firstName + " " + addressDetails?.lastName}</p>
              </div>
              <div className="flex justify-between">
                <p>Email:</p>
                <p>{addressDetails?.email}</p>
              </div>
              <div className="flex justify-between">
                <p>Address:</p>
                <p>{addressDetails?.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
                    <div className='Sub orders heading'>
                        <h3 className='h3 text-h3 text-white'>Sub Orders</h3>
                    </div>
                    <div className="bg-[#2A2A2E] rounded-lg flex flex-col gap-4 w-34rem mt-2">
                        <div className="flex flex-col gap-4">
                            {orderDetails.subOrders.map((_, index) => (
                                <div key={index} className="bg-[#2A2A2E] p-4 rounded-lg mb-4 flex gap-4 items-center">
                                    {/* Image placeholder */}
                                    <img src={_.imageURL} alt="" className='w-20 h-20' />
                                    <div className="flex-1 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">Product {_.productId}</p>
                                            <p>Size: {_.size}</p>
                                            <p>Colour: {_.color}</p>
                                            <p className='flex items-center' >Price: <img src={currency.src} alt="" className='w-4 h-4' />{_.price}</p>
                                            <p>Store ID: {_.store}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <h5 className="bg-[#62447D] text-white p-2 text-h5 h5 rounded mb-2">Order Status</h5>
                                            <button className="bg-transparent text-[#D6A7FF] p-2 rounded">View Invoice</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default OrderDetail;
