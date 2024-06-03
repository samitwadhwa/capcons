import React from 'react';
import Chart from '../components/chart/chartComponent'; // Import your Chart component
import Card from '../components/card/Card';
import PaymentsTable from '../components/paymentsTable/paymentTable'; // Import your PaymentsTable component
import Amount from '../../../public/images/collectedAmount.png';

const App: React.FC = () => {
  return (
    <div className='space-y-3'>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <Card 
          imageUrl={Amount.src}
          title="Collected Amount"
          description="from 23 captures payments"
          date="$71,297.00"
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
      <PaymentsTable />
    </div>
  );
};

export default App;
