import React from 'react';
import { FaPaintBrush, FaCode, FaMobileAlt, FaPenNib } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <div className="px-4 py-16 mx-20">
      <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">Services</h2>
      <p className="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus iusto facilis harum veniam? <br/> Accusantium eligendi perspiciatis quas. Error, excepturi.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-h-60 w-60">
          <div className="mb-4 text-left">
            <FaPaintBrush className="text-[#FD6F00] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">UI/UX</h3>
          <p className="text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla nec interdum scelerisque.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-h-60 w-60">
          <div className="mb-4 text-left">
            <FaCode className="text-[#FD6F00] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">Web Design</h3>
          <p className="text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla nec interdum scelerisque.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-h-60 w-60">
          <div className="mb-4 text-left">
            <FaMobileAlt className="text-[#FD6F00] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">App Design</h3>
          <p className="text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla nec interdum scelerisque.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-h-60 w-60">
          <div className="mb-4 text-left">
            <FaPenNib className="text-[#FD6F00] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">Graphic Design</h3>
          <p className="text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla nec interdum scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
