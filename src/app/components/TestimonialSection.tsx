import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__',
    quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eaque dolor totam nulla laudantium minus nisi ut dolorum, quibusdam cum optio sint consequatur labore consectetur nostrum quam saepe modi id illum dolore maiores est! Fugiat nihil iusto id error odio eos ducimus, dolorum asperiores repellat aliquam. Dolores voluptates quo deleniti',
    name: 'John Doe',
    profile: 'CEO',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__',
    quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eaque dolor totam nulla laudantium minus nisi ut dolorum, quibusdam cum optio sint consequatur labore consectetur nostrum quam saepe modi id illum dolore maiores est! Fugiat nihil iusto id error odio eos ducimus, dolorum asperiores repellat aliquam. Dolores voluptates quo deleniti',
    name: 'Jane Smith',
    profile: 'CTO',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__',
    quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eaque dolor totam nulla laudantium minus nisi ut dolorum, quibusdam cum optio sint consequatur labore consectetur nostrum quam saepe modi id illum dolore maiores est! Fugiat nihil iusto id error odio eos ducimus, dolorum asperiores repellat aliquam. Dolores voluptates quo deleniti.',
    name: 'Alice Brown',
    profile: 'CFO',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__',
    quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eaque dolor totam nulla laudantium minus nisi ut dolorum, quibusdam cum optio sint consequatur labore consectetur nostrum quam saepe modi id illum dolore maiores est! Fugiat nihil iusto id error odio eos ducimus, dolorum asperiores repellat aliquam. Dolores voluptates quo deleniti.',
    name: 'Michael White',
    profile: 'COO',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBarClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 mx-20" id='testimonials'>
      <h2 className="text-4xl font-bold text-center font-poppins">Testimonials</h2>
      <p className="text-center mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.
      </p>

      <div className="relative overflow-hidden mt-12">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center w-full justify-center mt-8 space-x-[4px]">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => handleBarClick(index)}
            className={`cursor-pointer w-7 rounded-xl h-[11px] transition-all duration-300 ${
              currentIndex === index ? 'bg-[#FD6F00]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
