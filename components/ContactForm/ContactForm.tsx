import React from "react";
import Button from "../Button/Button";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-zinc-900 mt-20">
      <div className="px-96 flex gap-2 justify-center align-top">
        <h1 className="useclass text-4xl font-bold">Contact</h1>
        <h2 className="text-4xl font-bold text-white">Us</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 bg-neutral-900">
        {/* Left Side Form Section */}
        <div>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Fields */}
            {[
              "First Name*",
              "Last Name",
              "Email Address*",
              "Phone No*",
              "Company",
              "Country",
              "Message*",
            ].map((label, index) => (
              <div key={index} className="grid-cols-2">
                <label className="text-gray-300 mb-2">{label}</label>
                <input
                  type="text"
                  className="bg-transparent border border-gray-300 p-2 rounded-md"
                  placeholder={" _______________________________"}
                />
              </div>
            ))}
           <Button text="Send"/>
          </form>
        </div>

        {/* Right Side Info Section */}
        <div>
          <div className="flex text-center mb-6 gap-2">
            <h1 className="text-4xl font-bold useclass">Speak</h1>
            <h2 className="text-4xl font-bold text-white">to an Expert</h2>
          </div>
          <div>
            <p className="text-gray-700 mb-4 flex">
              If you have any RFP requirements, please share them with us at
            </p>
            <p className="useclass font-bold mb-4">info@conceptrecall.com</p>
            <p className="text-gray-700 gap-2 mb-4">
              and if you are looking for a career-related inquiry, please check our{" "}
              <span className="useclass">Career</span> section.
            </p>
          </div>
          <p className="text-gray-700 mt-8">
            Discover the perfect solution for your business needs with us! Let&apos;s join
            forces and unlock the path to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
