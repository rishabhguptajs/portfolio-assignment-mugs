import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="relative mx-20 flex flex-col md:flex-row items-center justify-between h-screen px-4 bg-white">
      <div className="relative flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
        <Image
          src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__"
          alt="About Me Image"
          width={400}
          height={800}
          className="rounded-full object-cover shadow-inner"
        />
        <div className="absolute top-10 w-[304px] h-[83px] bg-[#FD6F0099] opacity-85"></div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800 custom-font">About Me</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque lacus in nisi venenatis, eget tincidunt nibh malesuada.
        </p>

        <div className="space-y-4">
          {['UX', 'Website Design', 'App Design', 'Graphic Design'].map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1/4 text-gray-700">{skill}</span>
              <div className="relative flex-grow h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-[#FD6F00] rounded-full" style={{ width: `${((index%2==0 ? index + 2 : index + 1) + 1) * 25}%` }}></div>
                <div className="absolute top-0 left-0 w-4 h-4 border-2 border-[#FD6F00] bg-gray-300 rounded-full cursor-pointer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
