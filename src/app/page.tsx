"use client"

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ServiceSection from "./components/ServiceSection";
import Projects from "./components/Projects";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <ServiceSection />
      <Projects />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
