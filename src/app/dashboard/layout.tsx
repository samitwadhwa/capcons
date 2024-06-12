// layouts/DashboardLayout.tsx

import React from 'react';
import { OrderIdProvider } from '../contexts/orderIdContext';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../components/navbar/Navbar';
import Sidebar from '../components/sidenavbar/sideNavbar';
import logo from '../../../public/images/logo.png';
import accountImage from '../../../public/images/account.png';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OrderIdProvider> {/* Wrap children with OrderIdProvider */}
      <div className="flex flex-col h-screen text-white">
        {/* Navbar */}
        <Navbar className="bg-[#15151B] text-white p-4 md:drop-shadow-xl flex justify-between items-center">
          <NavbarSection className="flex items-center mr-2">
            <img src={logo.src} alt="Logo" className="h-8 w-8" />
            <NavbarItem>
              <NavbarLabel className='ml-[-12px]'>Capcons</NavbarLabel>
            </NavbarItem>
          </NavbarSection>

          <NavbarSection className="flex items-center">
            <img src={accountImage.src} alt="Account" className="h-6 w-6 rounded-full" />
          </NavbarSection>
        </Navbar>

        {/* Sidebar and Main Content */}
        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar */}
          <Sidebar/>

          {/* Main content area */}
          <main className="flex-grow p-4 bg-[#15151B] overflow-y-auto text-white">
            {children}
          </main>
        </div>
      </div>
    </OrderIdProvider>
  );
}
