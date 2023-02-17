import Nav from "@/app/components/Nav";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const page = () => {
  return (
    <>
      <Nav />
      <div className="w-full bg-white h-full bg-cover mt-20">
        <div className="flex flex-col gap-3 items-center lg:w-5/6 mx-auto   text-center">
          <div className="bg-gray-100 w-full h-80 pt-28">
            <h2 className="font-semibold text-[36px] font-mono text-black">
              Get In Touch
            </h2>
            <p className=" text-[18px] text-center md:px-40  text-gray-500">
              Connect with us to know more
            </p>
          </div>
          <div className="flex flex-col gap-12 items-center mb-12 lg:w-5/6 mx-auto mt-12 text-gray-500  text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl"> PIAIC Helpline</h2>
              <h2 className="text-3xl  text-green-500">0900-78601</h2>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl"> Connect with us</h2>
              <div className="flex justify-between">
                <SocialIcon url="https://twitter.com/uzairhussain98" />
                <SocialIcon url="https://facebook.com/jaketrent" />
                <SocialIcon url="https://youtube.com/jaketrent" />
                <SocialIcon url="https://instagram.com/jaketrent" />
              </div>
            </div>
          </div>
          {/* <Image
            className="mt-6 rounded-lg "
            src={"/about-01.jpg"}
            alt="hero"
            height={1000}
            width={1000}
          /> */}
        </div>
      </div>
    </>
  );
};

export default page;
