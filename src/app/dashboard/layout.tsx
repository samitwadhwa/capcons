"use client";

import React from 'react';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../components/navbar/Navbar';
import Sidebar from '../components/sidenavbar/sideNavbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar className="bg-[#15151B] text-white p-4 md:drop-shadow-xl">
        <NavbarSection>
          <NavbarItem>
            <NavbarLabel>Capcons</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
      </Navbar>

      {/* Sidebar and Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-grow p-4 bg-[#15151B] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
