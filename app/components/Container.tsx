import React from "react";
import Chunk from "./Chunk";

const Container = () => {
  return (
    <div className="w-full flex flex-col gap-12 text-white  mt-12 ">
      <Chunk
        title={"Learn To Code"}
        desc={
          "Be one of the developer that develop webapps in which everything is neatly organized and is heavily focused on performances."
        }
        img={"/editor.png"}
      />
      <Chunk
        Imagefirst={true}
        title={"Learn To Design"}
        desc={
          "Be one of the designer that designs webapps in which everything is neatly organized and is heavily focused on performances."
        }
        img={"/sketch.png"}
      />
    </div>
  );
};

export default Container;
