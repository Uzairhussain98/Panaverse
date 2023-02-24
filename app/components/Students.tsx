"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Students = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-5/6 mx-auto  mt-24 text-center">
      <h2 className="font-semibold text-[30px] font-mono text-white">
        Over 20,000 Graduated Students{" "}
      </h2>
      <p className=" mb-3 text-[18px] text-center md:px-40 text-gray-300">
        Thousands of the most successful companies hired our students.
      </p>
      {/* <div className="text-white border-2 border-red-300 "> */}
      <Carousel
        autoPlay
        // showArrows
        showThumbs={false}
        swipeable
        transitionTime={2000}
        infiniteLoop
        dynamicHeight
      >
        <div>
          <img className="rounded-xl h-80 w-80 object-cover" src="/s1.jpg" />
        </div>
        <div>
          <img className="rounded-xl h-80 w-80 object-cover" src="/s2.jpg" />
        </div>
        <div>
          <img className="rounded-xl h-80 w-80 object-cover" src="/s3.jpg" />
        </div>
      </Carousel>
    </div>
    // </div>
  );
};

export default Students;
