import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    // <div className="bg-[url('/shape-hero.svg')]">
    <div className="flex flex-col mt-8 md:flex-row md:w-5/6 mx-auto items-center gap-6  text-white">
      <div className="mx-4 flex flex-col gap-6 md:w-[50%]">
        <h1 className="font-semibold text-left text-[56px] font-mono text-white">
          Panaverse{" "}
          <span className="bg-white text-green-500 rounded-lg p-2">DAO</span>
        </h1>
        <p className=" text-[20px] text-justify text-gray-300">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </p>
        <button className="p-6 bg-green-500 w-36 font-semibold rounded-xl">
          Get Started
        </button>
      </div>
      <Image
        src={"/hero-illustration.png"}
        alt="hero"
        height={500}
        width={500}
      />
    </div>
    // </div>
  );
};

export default Hero;