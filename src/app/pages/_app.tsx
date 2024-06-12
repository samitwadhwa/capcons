import { AppProps } from 'next/app';
import { OrderIdProvider } from '../contexts/orderIdContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrderIdProvider>
      <Component {...pageProps} />
    </OrderIdProvider>
  );
}

export default MyApp;
