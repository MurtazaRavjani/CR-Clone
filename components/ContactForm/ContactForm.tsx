import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="p-3 rounded-lg bg-gray-700" />
          <input type="text" placeholder="Last Name" className="p-3 rounded-lg bg-gray-700" />
          <input type="email" placeholder="Email Address" className="p-3 rounded-lg bg-gray-700" />
          <input type="text" placeholder="Phone Number" className="p-3 rounded-lg bg-gray-700" />
          <textarea placeholder="Message" className="col-span-2 p-3 rounded-lg bg-gray-700"></textarea>
          <button type="submit" className="bg-orange-500 text-white py-3 rounded-lg col-span-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
