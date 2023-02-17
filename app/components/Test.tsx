import Image from "next/image";
import React from "react";

const Test = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-5/6 mx-auto bg-gray-100 mt-20 items-center justify-evenly ">
      <div className="w-full text-center  h-full p-8">
        <h1 className="text-[22px] font-normal">
          Danielle Mayer, business owner, says:
        </h1>
        <p className="text-[28px] font-medium mt-3">
          "All those students who are here for training your fortune is
          worldwide "
        </p>
      </div>
      <Image
        className="h-full"
        src={"/alvi.jpg"}
        alt="hero"
        height={1200}
        width={550}
      />
    </div>
  );
};

export default Test;
