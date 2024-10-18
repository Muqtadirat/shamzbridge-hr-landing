import {
  instagramIcon,
  xIcon,
  youtubeIcon,
  linkedinIcon,
  whatsappIcon,
} from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
 const socialLinks = [
   { icon: instagramIcon, alt: "Instagram" },
   { icon: xIcon, alt: "X (formerly Twitter)" },
   { icon: youtubeIcon, alt: "YouTube" },
   { icon: linkedinIcon, alt: "LinkedIn" },
   { icon: whatsappIcon, alt: "WhatsApp" },
 ];

  return (
    <footer className="bg-primary-slate text-white py-10">
      <div className="max-w-[1232px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="text-xl font-bold">Shamzbridge Consult</div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, alt }, index) => (
              <Image key={index} src={icon} alt={alt} className="w-6 h-6" />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 flex flex-col">
            {[
              ["Services", "#services"],
              ["About Us", "#about"],
            ].map(([title, href]) => (
              <Link
                href={href}
                key={title}
                className="               
                 hover:text-primary-blue transition-all ease-in-out duration-300"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact*/}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Email: ipsum@mail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 py-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Shamzbridge Consult. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
