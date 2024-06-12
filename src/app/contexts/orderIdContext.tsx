"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface OrderIdContextType {
  orderId: string;
  setOrderId: (orderId: string) => void;
}

const OrderIdContext = createContext<OrderIdContextType | undefined>(undefined);

export const OrderIdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orderId, setOrderId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('orderId') || '';
    }
    return '';
  });

  useEffect(() => {
    if (orderId) {
      localStorage.setItem('orderId', orderId);
    }
  }, [orderId]);

  return (
    <OrderIdContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </OrderIdContext.Provider>
  );
};

export const useOrderId = (): OrderIdContextType => {
  const context = useContext(OrderIdContext);
  if (!context) {
    throw new Error('useOrderId must be used within an OrderIdProvider');
  }
  return context;
};
