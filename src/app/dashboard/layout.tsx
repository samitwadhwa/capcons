"use client";

import React from 'react';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../components/navbar/Navbar';
import Sidebar from '../components/sidenavbar/sideNavbar';
import logo from '../../../public/images/logo.png'; // Adjust the path according to your project structure
import accountImage from '../../../public/images/account.png'; // Adjust the path according to your project structure

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen text-white"> {/* Set text color for entire layout */}
      {/* Navbar */}
      <Navbar className="bg-[#15151B] text-white p-4 md:drop-shadow-xl flex justify-between items-center"> {/* Added flex classes */}
        <NavbarSection className="flex items-center mr-2"> {/* Reduce space between items */}
          <img src={logo.src} alt="Logo" className="h-8 w-8" /> {/* Adjusted logo image */}
          <NavbarItem>
            <NavbarLabel className='ml-[-12px]'>Capcons</NavbarLabel>
          </NavbarItem>
        </NavbarSection>

        <NavbarSection className="flex items-center"> {/* Account section */}
          <img src={accountImage.src} alt="Account" className="h-6 w-6 rounded-full" /> {/* Adjusted account image */}
        </NavbarSection>
      </Navbar>

      {/* Sidebar and Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <Sidebar/> {/* Set text color for sidebar */}

        {/* Main content area */}
        <main className="flex-grow p-4 bg-[#15151B] overflow-y-auto text-white"> {/* Set text color for main content */}
          {children}
        </main>
      </div>
    </div>
  );
}
