"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white">
      <Link href="/" className="flex items-center space-x-2">
        <span className="custom-font-3 bg-[#FD6F00] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
          MU
        </span>
        <span className="flex items-baseline space-x-1">
          <span className="custom-font text-xl font-bold">M</span>
          <span className="custom-font-2 text-xl">umair</span>
        </span>
      </Link>

      <ul className="hidden md:flex space-x-8 text-gray-700">
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
        <li className="bg-[#FD6F00] text-white px-4 py-2 rounded-full hover:bg-[#e65b00]">
          <Link href="/cv" className="text-white">Download CV</Link>
        </li>
      </ul>

      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none text-gray-700"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center absolute top-16 left-0 right-0 bg-white space-y-4 py-4 md:hidden z-50`}
      >
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
        <li className="bg-[#FD6F00] text-white px-4 py-2 rounded-full hover:bg-[#e65b00]">
          <Link href="/cv" className="text-white">Download CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
