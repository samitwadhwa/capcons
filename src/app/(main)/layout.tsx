import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";

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
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">
            {children}
        </main>
        <Footer />
    </div>
    </>
  );
}
