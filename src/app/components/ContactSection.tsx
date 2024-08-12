import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="flex flex-col items-center py-16 mx-4">
      <h2 className="text-4xl md:text-4xl font-bold text-center font-poppins">
        Let’s Design Together
      </h2>
      <p className="text-center mt-4 text-gray-600 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br/> massa nibh lectus netus in Lorem ipsum dolor sit
      </p>
      
      <div className="flex mt-8 w-full max-w-md gap-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow p-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none border border-gray-300 placeholder-gray-500"
        />
        <button
          className="p-3 bg-[#FD6F00] text-white rounded-lg focus:outline-none"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
