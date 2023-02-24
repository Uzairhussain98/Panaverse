import React from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
};

const Box = ({ title, id, desc }: Props) => {
  return (
    <div className="bg-white md:w-64 h-80 hover:scale-110 transition ease-in-out hover:border-[#868af5] border-2 py-10 px-4 border-[#00d7af] rounded-md flex flex-col gap-6 text-left">
      <h3 className="text-sm text-gray-400">#Ai #Data</h3>
      <h1 className="text-[20px] font-semibold">{title}</h1>
      <h2 className="text-sm text-gray-400"> {desc}</h2>
    </div>
  );
};

export default Box;
