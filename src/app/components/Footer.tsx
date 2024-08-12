import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10">
      <div className="flex justify-center items-center m-11">
        <span className="custom-font-4 bg-[#FD6F00] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center text-2xl">
          MU
        </span>
        <span className="flex items-baseline space-x-1">
          <span className=" text-sm custom-font-4 font-bold">M</span>
          <span className="custom-font-4">umair</span>
        </span>
      </div>
      
      <ul className="flex justify-center space-x-8 text-gray-700 mt-4">
        <li className="hover:text-[#FD6F00]">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-[#FD6F00]">
          <Link href="#about">About Me</Link>
        </li>
        <li className="hover:text-[#FD6F00]">
          <Link href="#services">Services</Link>
        </li>
        <li className="hover:text-[#FD6F00]">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-[#FD6F00]">
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li className="hover:text-[#FD6F00]">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      
      <div className="flex justify-center space-x-6 mt-6">
        <Link href="https://facebook.com">
          <FaFacebookF className="w-6 h-6 text-black hover:text-[#FD6F00]" />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter className="w-6 h-6 text-black hover:text-[#FD6F00]" />
        </Link>
        <Link href="https://instagram.com">
          <FaInstagram className="w-6 h-6 text-black hover:text-[#FD6F00]" />
        </Link>
        <Link href="https://linkedin.com">
          <FaLinkedinIn className="w-6 h-6 text-black hover:text-[#FD6F00]" />
        </Link>
      </div>
      
      <div className="bg-[#545454] text-center py-4 mt-6">
        <p className="text-[#FFFFFF]">© 2023 <span className='text-[#FD6F00]'>Mumair</span> All Rights Reserved, Inc.</p>
      </div>
    </div>
  )
}

export default Footer
