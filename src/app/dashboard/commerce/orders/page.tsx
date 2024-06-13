import React from 'react';
import Chart from '../../../components/chart/chartComponent'; // Import your Chart component
import Card from '../../../components/card/Card';
import PaymentsTable from '../../../components/paymentsTable/paymentTable'; // Import your PaymentsTable component
import Amount from '../../../../../public/images/collectedAmount.png';
import { FaExclamationTriangle, FaTimesCircle, FaUndo } from 'react-icons/fa';

const App: React.FC = () => {

  const refundsCard = {
    icon: <FaUndo className="text-green-500" />,
    title: 'Refunds',
    amount: '$0.00',
    processed: '0 Processed',
    link: '#'
  };
  
  const disputesCard = {
    icon: <FaExclamationTriangle className="text-orange-500" />,
    title: 'Disputes',
    amount: '$0.00',
    open: '0 Open',
    link: '#',
    extra: 'View All'
  };
  
  const failedCard = {
    icon: <FaTimesCircle className="text-red-500" />,
    title: 'Failed',
    count: '7',
    description: 'Payments',
    link: '#'
  };

  return (
    <div className='space-y-3'>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <Card 
          imageUrl={Amount.src}
          title="Collected Amount"
          description="from 23 captures payments"
          date="71,297.00"
          widthClass="md:w-1/2" 
        />
        <Card 
          chart={<Chart />}
          title="Payment Method"
          description=""
          date=""
          widthClass="md:w-1/2" 
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card
          title={<div className="flex items-center space-x-2">{refundsCard.icon}<span>{refundsCard.title}</span></div>}
          description={
            <div>
              <div>{refundsCard.amount}</div>
              <div>{refundsCard.processed}</div>
            </div>
          }
          date=""
          widthClass="w-full"
        />
        <Card
          title={<div className="flex items-center space-x-2">{disputesCard.icon}<span>{disputesCard.title}</span></div>}
          description={
            <div>
              <div>{disputesCard.amount}</div>
              <div>{disputesCard.open}</div>
              <a href={disputesCard.link} className="text-login-color hover:underline">{disputesCard.extra}</a>
            </div>
          }
          date=""
          widthClass="w-full"
        />
        <Card
          title={<div className="flex items-center space-x-2">{failedCard.icon}<span>{failedCard.title}</span></div>}
          description={
            <div>
              <div>{failedCard.count}</div>
              <div>{failedCard.description}</div>
            </div>
          }
          date=""
          widthClass="w-full"
        />
      </div>
     
      <PaymentsTable />
    </div>
  );
};

export default App;
