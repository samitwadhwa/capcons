import type { Metadata } from "next";
import Footer from "./components/footer";
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../components/navbar/Navbar';
import logo from '../../../public/images/logo.png';
import accountImage from '../../../public/images/account.png';


export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description: "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" flex flex-col text-white">
        {/* Navbar */}
        <Navbar className="bg-[#15151B] text-white p-4 md:drop-shadow-l flex justify-around gap-[20rem] items-center">
          <NavbarSection className="flex items-center mr-2">
            <img src={logo.src} alt="Logo" className="h-7 w-7" />
            <NavbarItem>
              <NavbarLabel className='ml-[-12px]'><h3 className="text-h3 h3">CapCons</h3></NavbarLabel>
            </NavbarItem>

          </NavbarSection>

          <NavbarSection className="flex items-center justify-evenly gap-[2rem]">

            <NavbarItem>
              <NavbarLabel className='cursor-pointer '><h4 className="text-h4 h4">Brands</h4></NavbarLabel>
            </NavbarItem>
            <NavbarItem>
              <NavbarLabel className='cursor-pointer'><h4 className="text-h4 h4">Creator</h4></NavbarLabel>
            </NavbarItem>
            <NavbarItem>
              <NavbarLabel className='cursor-pointer hover:underline'><h4 className="text-h4 h4">Pricing</h4></NavbarLabel>
            </NavbarItem>
            <NavbarItem>
              <NavbarLabel className='cursor-pointer hover:underline'><h4 className="text-h4 h4">Resources</h4></NavbarLabel>
            </NavbarItem>
            <NavbarItem>
              <NavbarLabel className='cursor-pointer'><h4 className="text-h4 h4">About Us</h4></NavbarLabel>
            </NavbarItem>
            </NavbarSection>

          <NavbarSection className="flex items-center">
            <img src={accountImage.src} alt="Account" className="h-6 w-6 rounded-full" />
          </NavbarSection>
        </Navbar>

          {/* Main content area */}
          <main className="flex-grow bg-[#15151B] overflow-y-auto text-white">
            {children}
          </main>

          
        </div>
        <div>
          <Footer/>
        </div>
    </>
  );
}
