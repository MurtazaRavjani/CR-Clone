import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      {/* Logo Section */}
      <div className="py-10 flex justify-center items-center h-[100px]">
        <Image src={"/logo-light.svg"} alt="Logo" width={220} height={50} />
      </div>

      {/* Border */}
      <hr className="border-gray-400" />

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 px-56 py-10">
        {/* Our Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Links</h3>
          <ul className="space-y-2">
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
  <h3 className="text-xl text-white font-bold mb-4">Contact Us</h3>
  <ul className="space-y-4">
    {/* Phone */}
    <li className="flex items-center gap-2 hover:text-orange-600 transition duration-300">
      <i className="fas fa-phone-alt text-white"></i>
      <p>(+92) 316 7856 990</p>
    </li>

    {/* Email */}
    <li className="flex items-center gap-2 hover:text-orange-600 transition duration-300">
      <i className="fas fa-envelope text-white"></i>
      <p>info@conceptrecall.com</p>
    </li>

    {/* Address */}
    <li className="flex items-start gap-2 hover:text-orange-600 transition duration-300">
      <i className="fas fa-map-marker-alt text-white mt-1"></i>
      <p>
        B-219, Block 10 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300
      </p>
    </li>
  </ul>
</div>


        {/* News Letter */}
        <div className="col-span-2 md:col-span-2 md:col-start-4">
          <h3 className="text-2xl font-bold mb-4 text-white">News Letter</h3>
          <p className="mb-4 text-xl text-white">
            Stay in tune for the latest news from Concept Recall
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="flex-grow p-2 rounded-l-md bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-useclass"
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
            <a key={index} href={link.href} className="underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
