import React from "react";
import Box from "./Box";
import { programs } from "../data/programs";
import Link from "next/link";
import { type } from "os";

type program = {
  id: string;
  title: string;
  desc: string;
};

const Programs = () => {
  return (
    <div className="flex flex-col  gap-3 items-center w-5/6 mx-auto  mt-24 text-center">
      <h2 className="font-semibold text-[36px] font-mono text-white">
        Available Programs
      </h2>
      <p className="mb-6 text-[18px] text-center md:px-40 text-gray-300">
        At vero eos et accusamus et iusto odio dignissimos ducimus.
      </p>
      <div className="flex-col w-full flex flex-wrap justify-center  md:flex-row gap-3 ">
        {programs.map(({ id, title, desc }: program) => (
          <Link href={`/Programs/${id}`} key={id}>
            <Box title={title} id={id} desc={desc} />
          </Link>
        ))}

        {/* <Box />
        <Box />
        <Box />
        <Box /> */}
      </div>
    </div>
  );
};

export default Programs;
