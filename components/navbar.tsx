"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo-light.svg";
import Button from "./Button/Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    // Disable scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Case Study", href: "/case-study" },
    { name: "Feed", href: "/feed" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/conceptrecall" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/teamconceptrecall/" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/conceptrecall" },
  ];

  return (
    <header className="bg-black">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={250}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")} // Navigate to Home
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 pl-20 text-white text-sm font-semibold flex-nowrap w-full">
          {links.map((link, index) => (
            <li key={index} className="flex items-center gap-6 min-w-max">
              <a
                href={link.href}
                className={`${
                  currentPath === link.href
                    ? "useclass"
                    : "hover:useclass transition duration-200"
                }`}
              >
                {link.name}
              </a>
              {/* Insert the button after the Careers link */}
              {link.name === "Careers" && (
                <div className="ml-7">
                  <Button text="Speak to an Expert" padding="py-3 px-5 text-sm" gap="" />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section for Desktop */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/923167856990"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-stone-900 hover:bg-useclass"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
          <a
            href="tel:+923167856990"
            className="p-2 rounded-lg bg-stone-900 hover:bg-useclass"
          >
            <Image
              src="/phone.svg"
              alt="Phone"
              width={24}
              height={24}
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden block p-2 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>

          {/* Logo in Slide-in Menu */}
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="mb-6 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              window.location.href = "/";
            }}
          />
          <ul className="space-y-6">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`block ${
                    currentPath === link.href
                      ? "useclass underline useclass"
                      : "hover:useclass transition duration-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Speak to an Expert Button */}
          <div className="py-2">
            <Button text="Speak to an Expert" padding="mt-10 py-2 px-2" gap="gap-4" />
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom left-3 flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg p-2 rounded-full hover:bg-useclass transition duration-200"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
