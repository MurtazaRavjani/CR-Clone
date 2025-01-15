import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactForm = () => {
  const fields = [
    { id: "firstName", label: "First Name", required: true },
    { id: "lastName", label: "Last Name", required: false },
    { id: "email", label: "Email", required: true },
    { id: "phone", label: "Phone", required: true },
    { id: "address", label: "Address", required: false },
    { id: "city", label: "City", required: false },
    { id: "notes", label: "Message", required: true, fullWidth: true },
  ];

  return (
    <div className="py-10 container">
      <div className="flex gap-2 justify-center">
        <h1 className="useclass text-4xl font-bold">Contact</h1>
        <h2 className="text-4xl font-bold text-white">Us</h2>
      </div>
  
    <div className=" flex my-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex-col md:flex-row">
      <div className="grid grid-cols-2 gap-4 p-4 w-full">
        {fields.map(({ id, label, required, fullWidth }) => (
          <div
            key={id}
            className={`p-2 rounded-md ${fullWidth ? "col-span-2" : ""}`}
          >
            <label
              htmlFor={id}
              className="block text-base font-medium text-neutral-600"
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            {id !== "notes" ? (
              <input
                type="text"
                id={id}
                className="w-full mt-1 px-0 py-2 border-b border-neutral-600 bg-black text-white focus:outline-none focus:ring-0 caret-white"
              />
            ) : (
              <textarea
                id="notes"
                rows={3}
                className="w-full space-y-4 border-b border-neutral-600 text-white bg-black focus:outline-none focus:ring-0 caret-white resize-none overflow-y-auto"
              ></textarea>
            )}
          </div>
        ))}
      </div>
      <div className="container w-1/12  ">
      
      </div>


        <div className="container text-white pt-10">
          <span className="flex gap-2 font-bold text-3xl">
            <h1 className="useclass">Speak</h1>
            <h1>to an Expert</h1>
          </span>
          <div className="pt-5">
            <div className="text-sm">
              <p>
                If you have any RFP requirements please share them with us at
              </p>
            </div>

            {/* Email and Career Info Section */}
            <div className="flex gap-1 text-sm">
              <Link className="useclass" href={"mailto:info@conceptrecall.com"}>
                info@conceptrecall.com
              </Link>
              <p>and if you are looking for a career-</p>
            </div>

            {/* Career Section */}
            <div className="flex gap-1 text-sm">
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
          <div className="mt-5 text-stone-400 text-sm">
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
