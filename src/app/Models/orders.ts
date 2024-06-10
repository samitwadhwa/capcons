export interface Status {
    status: string;
    time: string;
    message: string;
  }
  
export interface SubOrder {
    subOrderId: string;
    productId: string;
    division: string;
    variantMrp: number;
    slug: string;
    variantId: string;
    totalPromoDiscount: number;
    promoDiscount: number;
    discount: number;
    quantity: number;
    variantPrice: number;
    finalPrice: number;
    price: number;
    gst: number;
    isIgst: boolean;
    igst: number;
    cgst: number;
    sgst: number;
    igstRate: number;
    cgstRate: number;
    sgstRate: number;
    status: Status[];
    invoiceDate: string;
    invoiceNumber: string;
    store: string;
    awbNumber: string;
    refNumber: string;
    deliveryPartner: string;
    refund: any;
    taxAmount: number;
    deliveryDate: string;
    hsnCode: string;
  }
  
export interface Address {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    landmark: string;
    addressType: string;
  }
  
export interface Order {
    userId: string;
    email: string;
    phone: string;
    subOrders: SubOrder[];
    amount: number;
    finalAmount: number;
    address: Address;
    paymentType: string;
    promo: string;
    donationAmount: number;
    deliveryCharge: number;
    vgmAmount: number;
    orderId: string;
    createdAt: string;
    suborderAllocated: boolean;
    circle: string;
    discount: number;
    omsPushed: boolean;
  }