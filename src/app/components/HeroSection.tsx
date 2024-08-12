"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between h-screen px-20 py-16 bg-white">
      <div className="max-w-lg md:w-1/2 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Hi, I am
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl custom-font">
            Muhammad Umair
          </span>
          <br />
          UI &amp; UX
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl custom-font-2">
            Designer
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque lacus in nisi venenatis, eget tincidunt nibh malesuada.
        </p>
        <Link href="#contact">
          <button className="mt-6 px-6 py-3 bg-[#FD6F00] text-white font-semibold rounded-full hover:bg-[#e65b00]">
            Hire Me
          </button>
        </Link>
      </div>

      <div className="relative flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
        <Image
          src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__"
          alt="Profile Image"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
        <div className="absolute top-10 w-[374px] h-[83px] bg-[#FD6F0099] opacity-60"></div>
        <div className="flex space-x-6 mt-6">
          <Link href="https://facebook.com">
            <FaFacebookF className="w-6 h-6 text-black" />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter className="w-6 h-6 text-black" />
          </Link>
          <Link href="https://instagram.com">
            <FaInstagram className="w-6 h-6 text-black" />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedinIn className="w-6 h-6 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
