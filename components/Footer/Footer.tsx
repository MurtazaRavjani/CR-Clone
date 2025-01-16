import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-gray-300 mt-3">
      {/* Logo Section */}
      <div className="flex justify-center items-center h-[100px]">
        <Image src={"/logo-light.svg"} alt="Logo" width={170} height={50} />
      </div>

      {/* Border */}
      <hr className="border-gray-400 mx-20" />

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 px-48 py-8">
        {/* Our Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Our Links</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Industries", href: "/industries" },
              { name: "Services", href: "/services" },
              { name: "Case Study", href: "/case-study" },
              { name: "Careers", href: "/careers" },
              { name: "Feed", href: "/feed" },
              { name: "Contact Us", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
{/* Contact Us */}
<div>
  <h3 className="text-xl text-white font-bold mb-4 px-2">Contact Us</h3>
  <ul className="space-y-5">
 {/* Phone */}
<li className="flex flex-col">
  <div className="flex items-center">
    <i className="fas fa-phone text-white px-2"></i>
    <p className="font-bold text-sm">Phone</p>
  </div>
  <a
    href="tel:+923167856990"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-600 transition duration-300 text-sm text-gray-400 px-2"
  >
    (+92) 316 7856 990
  </a>
</li>

{/* Email */}
<li className="flex flex-col">
  <div className="flex items-center">
    <i className="fas fa-envelope text-white px-2"></i>
    <p className="font-bold text-sm">Email</p>
  </div>
  <a
    href="mailto:info@conceptrecall.com"
    className="hover:text-orange-600 transition duration-300 text-sm text-gray-400 px-2"
  >
    info@conceptrecall.com
  </a>
</li>

{/* Address */}
<li className="flex flex-col">
  <div className="flex items-center">
    <i className="fas fa-map-marker-alt text-white text-base px-2"></i>
    <p className="font-bold text-sm">Address</p>
  </div>
  <a
    href="https://www.google.com/maps/place/Concept+Recall/@24.9125141,67.1004176,21z/data=!4m6!3m5!1s0x3eb33e9c0fc552eb:0x9d883c6a5bed576a!8m2!3d24.912541!4d67.1004498!16s%2Fg%2F11gdkk5wpn?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-600 transition duration-300 text-sm text-gray-400 px-2"
  >
    B-219, Block 10 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300
  </a>
</li>

  </ul>
</div>




        {/* News Letter */}
        <div className="col-span-2 md:col-span-2 md:col-start-4">
          <h3 className="text-lg font-bold mb-4 text-white">News Letter</h3>
          <p className="mb-4 text-base text-white">
            Stay in tune for the latest news from Concept Recall
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="flex-grow p-2 rounded-l-md bg-transparent border border-gray-600 focus:outline-none focus:ring-0"
            />
            <Button text="Submit" />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <hr className="border-gray-400" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-white px-56 py-4">
        <p>© Copyrights 2025 All Rights Reserved.</p>
        <div className="flex space-x-4">
          {[
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Privacy & Policy", href: "/privacy" },
            { name: "FAQs", href: "/faqs" },
          ].map((link, index) => (
            <a key={index} href={link.href} className="underline hover:text-orange-600 transition duration-300">
  {link.name}
</a>

          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
