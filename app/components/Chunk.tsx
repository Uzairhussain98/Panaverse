import Image from "next/image";
import React from "react";
type Props = {
  Imagefirst?: boolean;
  title: string;
  desc: string;
  img: string;
};

const Chunk = ({ Imagefirst, title, desc, img }: Props) => {
  return (
    <div
      className={`flex flex-col mt-8 ${
        Imagefirst ? "md:flex-row-reverse" : "md:flex-row"
      } md:w-5/6 mx-auto items-center gap-6  text-white}`}
    >
      <div className="mx-4 flex flex-col gap-3 md:w-[50%]">
        <h2 className="font-semibold text-left text-[36px] font-mono text-white">
          {title}
        </h2>
        <p className=" text-[18px] text-justify text-gray-300">{desc}</p>
      </div>
      <Image src={img} alt="hero" height={500} width={500} />
    </div>
  );
};

export default Chunk;
