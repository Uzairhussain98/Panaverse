import Image from "next/image";
import React from "react";

const Earn = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-5/6 mx-auto  mt-24 text-center">
      <h2 className="font-semibold text-[36px] font-mono text-white">
        Earn While You Learn
      </h2>
      <p className=" text-[18px] text-center md:px-40 text-gray-300">
        Opalin helps you present your business in a wide variety of ways.
        Display full-width images, divide content in a single or multiple
        columns, anything to make your product or service stand out!
      </p>
      <Image
        className="mt-6"
        src={"/dashboard.png"}
        alt="hero"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default Earn;
