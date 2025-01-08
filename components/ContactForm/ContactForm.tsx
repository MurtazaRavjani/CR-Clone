import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-zinc-800 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <input type="text" placeholder="First Name" className="p-3 bg-black text-white rounded-md" />
          <input type="text" placeholder="Last Name" className="p-3 bg-black text-white rounded-md" />
          <textarea placeholder="Message" className="col-span-2 p-3 bg-black text-white rounded-md"></textarea>
          <button type="submit" className="col-span-2 bg-orange-500 py-3 text-white rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
