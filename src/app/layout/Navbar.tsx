import Link from "next/link";
import navLinks from "./navLinks";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { logo } from "@/assets/assets";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface NavbarProps {
  pathname: string;
}

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setShowMenu(false);
    router.push(href);
  };

  return (
    <header className="bg-white/95 fixed top-0 left-0 right-0 px-4 lg:px-0 z-50">
      <div className="flex justify-between items-center max-w-[1232px] mx-auto">
        <Image
          src={logo}
          alt="Shamzbridge Consult"
          className="w-[200px] lg:w-[300px]"
        />
        <nav>
          <ul className="hidden lg:flex gap-x-[4.375rem] font-semibold">
            {navLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`hover:text-primary-slate hover:underline underline-offset-4 transition-all duration-500 ease-in-out ${
                  pathname === href
                    ? "underline hover:no-underline"
                    : "no-underline"
                }`}
              >
                <li>{title}</li>
              </Link>
            ))}
          </ul>

          <div className="lg:hidden">
            <Hamburger
              rounded
              size={26}
              color="#333"
              duration={0.6}
              label="Show menu"
              toggled={showMenu}
              toggle={setShowMenu}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-14 left-0 right-0 py-6 px-4 h-screen bg-white text-sm font-semibold z-50"
            style={{ pointerEvents: showMenu ? "auto" : "none" }}
          >
            <ul className="flex flex-col space-y-10">
              {navLinks.map(({ title, href }) => (
                <li
                  key={title}
                  onClick={() => handleLinkClick(href)}
                  className={`hover:underline underline-offset-4 transition-all duration-500 ease-in-out ${
                    pathname === href
                      ? "underline hover:no-underline"
                      : "no-underline"
                  }`}
                >
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
