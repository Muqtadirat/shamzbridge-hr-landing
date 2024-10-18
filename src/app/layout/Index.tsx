"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar pathname={pathname} />
      <main className="max-w-[1232px] mx-auto px-4 lg:px-0 pb-12 lg:pb-20 pt-24 lg:pt-36">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
