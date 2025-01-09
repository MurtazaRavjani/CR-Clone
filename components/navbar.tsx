import Image from "next/image";
import logo from "../../../ConceptRecall.MR/images/logo.jpg";
import Button from "./Button/Button";

const Navbar: React.FC = () => {
  return (
    <header
      className={`bg-black text-white transition-transform duration-300"
      }`}
    >
      <div className="container mx-auto justify-around items-center h-[80px] ">
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
          <div className="flex space-x-72 gap-y-96 pl-10 font-semibold px-[90px]">

              <Button text="Speak to an Expert"/>
            </div>  
            
          
            <div className="flex items-center gap-2 bg-stone-900 py-1 px-1 rounded-lg">
          <span className="p-2 rounded-lg hover:bg-orange-600">
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </span>
          <span className="p-2 rounded-lg hover:bg-useclass">
            <Image
              src="/phone.svg"
              alt="Phone"
              width={24}
              height={24}
            />
          </span>
        </div>
        </nav>
          </div> 
       
    </header>
  );
};

export default Navbar;
