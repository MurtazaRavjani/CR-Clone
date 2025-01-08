import Image from "next/image";
// import { FiPhone } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../ConceptRecall.MR/images/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <header
      className={`bg-black text-white transition-transform duration-300"
      }`}
    >
      <div className="container mx-auto flex justify-around items-center h-[82px] ">
        <nav className="flex justify-between items-center gap-15 pl-32 ">
          {/* Logo */}
          <div className="flex items-center pr-16">
            <Image
              src={logo}
              alt="Logo"
              width={230}
              height={230}
              className="mr-1"
            />
         
              </div>

          {/* Navbar Links */}
          <ul className="flex space-x-6 pl-16 text-md font-semibold">
            {[
              { name: "Home", href: "/home", colorClass: "text-orange-500 " },
              { name: "About us", href: "/about", },
              { name: "Industries", href: "/industries" },
              { name: "Services", href: "/services" },
              { name: "Case Study", href: "/case-study" },
              { name: "Feed", href: "/feed" },
              { name: "Careers", href: "/careers" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`${
                    link.colorClass || "hover:text-orange-500 transition duration-200"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-72 gap-y-96 pl-10 font-semibold px-[15px]">
            <a
              href="../Expert/speak-to-an-expert.tsx"
              className="bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-useclass"
            >
              Speak to an Expert
            </a>
            </div>  
            </nav>
           
          {/* Contact and Social Icons
          
            <div className="flex space-x-2 px-2 py-2 bg-gray-800 rounded-md ">
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 transition duration-200 p-2 rounded-md"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="tel:your-phone-number"
                className="text-white hover:bg-orange-600 transition duration-200 p-2 rounded-md"
              >
                <FiPhone size={24} />
              </a>
            </div> */}
          </div>
       
    </header>
  );
};

export default Navbar;
