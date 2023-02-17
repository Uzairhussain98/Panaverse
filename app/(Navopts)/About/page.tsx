import Nav from "@/app/components/Nav";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <div className="w-full bg-white h-full bg-cover mt-20">
        <div className="flex flex-col gap-3 items-center lg:w-5/6 mx-auto   text-center">
          <div className="bg-gray-100 w-full h-80 pt-28">
            <h2 className="font-semibold text-[36px] font-mono text-black">
              Who Are We?
            </h2>
            <p className=" text-[18px] text-center md:px-40  text-gray-500">
              We're a community of designers and developers creating tools for
              the web.
            </p>
          </div>
          <p className="text-[18px] text-justify text-gray-500 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <Image
            className="mt-6 rounded-lg "
            src={"/about-01.jpg"}
            alt="hero"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </>
  );
};

export default page;
