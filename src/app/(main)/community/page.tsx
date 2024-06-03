import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-10 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="mb-8">
          <p className="mb-4 text-justify">Your privacy is important to us. It is [Your Company]&apos;s policy to respect your privacy regarding any information we may collect from you across our website, [Your Website], and other sites we own and operate.</p>
          
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4 text-justify">We only collect information about you if we have a reason to do so. For example, to provide our services, to communicate with you, or to improve our services. We collect information in three ways: if and when you provide information to us, automatically through operating our services, and from outside sources.</p>
          
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
          <p className="mb-4 text-justify">We use the information we collect in various ways, including to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Process your transactions</li>
            <li>Send you text messages</li>
            <li>Find and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Security</h2>
          <p className="mb-4 text-justify">The security of your personal information is important to us. We strive to use commercially acceptable means to protect your personal information, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

          <h2 className="text-2xl font-semibold mb-4">4. Changes to This Policy</h2>
          <p className="mb-4 text-justify">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="text-justify">If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
