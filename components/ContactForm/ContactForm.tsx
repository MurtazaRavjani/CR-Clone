import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactForm: React.FC = () => {
  return (
    <div className="py-10">
      <div className="flex gap-2 justify-center">
        <h1 className="useclass text-4xl font-bold">Contact</h1>
        <h2 className="text-4xl font-bold text-white">Us</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-40 px-48">
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
              <div key={index} className="flex flex-col">
                <label className="text-gray-300 mb-2">
                  {label.includes("*") ? (
                    <>
                      {label.replace("*", "")}
                      <span className="text-red-500">*</span>
                    </>
                  ) : (
                    label
                  )}
                </label>
                {label === "Message*" ? (
                  <textarea
                    className="bg-transparent p-2 w-[485px]"
                    placeholder={
                      "____________________________________________________"
                    }
                  />
                ) : (
                  <input
                    type="text"
                    className="bg-transparent p-1"
                    placeholder={" _______________________________________________"}
                  />
                )}
              </div>
            ))}
          </form>
        </div>

        <div className="container text-white pt-10">
          <span className="flex gap-2 font-bold text-3xl">
            <h1 className="useclass">Speak</h1>
            <h1>to an Expert</h1>
          </span>
          <div className="pt-5">
            <div className="">
              <p>
                If you have any RFP requirements please share them with us at
              </p>
            </div>

            {/* Email and Career Info Section */}
            <div className="flex gap-1 ">
              <Link className="useclass" href={"mailto:info@conceptrecall.com"}>
                info@conceptrecall.com
              </Link>
              <p>and if you are looking for a career-</p>
            </div>

            {/* Career Section */}
            <div className="flex gap-1">
              <p>related enquiry please check our</p>
              <Link
                href={"/careers"}
                className="font-semibold useclass cursor-pointer"
              >
                Career
              </Link>
              <p>section.</p>
            </div>
          </div>
          <div className="mt-5 text-stone-500">
            <p>
              Discover the perfect solution for your business needs with us!
              Let&apos;s join forces and unlock the path to success
            </p>
            <div className="flex space-x-10 mt-6">
      <Link target="_blank" href="https://www.facebook.com/conceptrecall">
       
          <i className="fab fa-facebook text-5xl hover:text-orange-600 transition duration-300"></i>
        
      </Link>

      <Link target="_blank" href="https://www.instagram.com/teamconceptrecall/">
    
          <i className="fab fa-instagram text-5xl hover:text-orange-600 transition duration-300"></i>
       
      </Link>

      <Link target="_blank" href="https://www.linkedin.com/company/conceptrecall">
    
      <i className="fab fa-linkedin text-5xl hover:text-orange-600 transition duration-300"></i>

        
      </Link>
    </div>

          </div>
        </div>
        
      </div>
      <div className="flex justify-center">
        <Button text="Send"/>
      </div>
    </div>
  );
};

export default ContactForm;
