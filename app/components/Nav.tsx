"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="z-10 w-full h-20 text-white border-b-2 fixed top-0 border-green-500 bg-black flex items-center justify-between p-9">
      <Link href={"/"}>
        <Image
          src={"/logos/panaverse80_80.png"}
          alt="alternate"
          width={60}
          height={60}
        />
      </Link>
      <ul className="hidden md:flex gap-12 items-center cursor-pointer ">
        <Link href={"/About"}>
          <li className=" hover:text-green-400 font-medium hover:underline decoration-green-300 underline-offset-8 hover:scale-110">
            About
          </li>
        </Link>
        <Link href={"/Contact"}>
          <li className=" hover:text-green-400 font-medium hover:underline decoration-green-300 underline-offset-8 hover:scale-110">
            Contact
          </li>
        </Link>
        <Link href={"/Programs"}>
          <li className=" hover:text-green-400 font-medium hover:underline decoration-green-300 underline-offset-8 hover:scale-110">
            Programs
          </li>
        </Link>
      </ul>
      <div className="hidden md:flex gap-6">
        <button className="py-2 px-2 bg-slate-800 rounded-xl font-medium">
          Login In
        </button>
        <button className="py-2 px-3 bg-slate-600 rounded-xl font-normal">
          Sign Up
        </button>
      </div>
      <GiHamburgerMenu
        color={"white"}
        size={30}
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <div className="absolute top-20 bg-green-200 w-[50vw] right-0 transition duration-1000 ease-in-out">
          <h3>hello world</h3>
          <h3>hello world</h3>
          <h3>hello world</h3>
        </div>
      )}
    </div>
  );
};

export default Nav;
