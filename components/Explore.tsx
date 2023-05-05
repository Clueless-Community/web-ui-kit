import React from "react";
import Link from "next/link";

const Explore = () => {
  return (
    <div className="text-white text-center flex  flex-col-reverse md:flex-row  justify-between items-start  relative mt-20">
      <div className="text-center md:p-20 p-9">
        <div className="flex  space-x-5 items-center  ">
          <a
            href="https://www.figma.com/file/0eqV7t3UKKM14UeqCSfOZb/SeamLess-UI?node-id=3880%3A1442&t=xbQ8rnQ1WyJ1oO6d-0"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              className="pr-2 hidden md:block w-10"
              src="/figma 1.png "
              alt=""
              draggable={false}
            />
          </a>
          <h1 className=" text-4xl text-[#7EE787] hidden md:block text-center">
            SeamLess UI Figma
          </h1>
        </div>

        <h2 className="text-xl mb-4 mt-4 text-center md:text-left">
          Built with the vision to encourage open-source enthusiasts!
          <br />
        </h2>
        <div className="green-gradient absolute left-28 top-36"></div>
        <p className="text-xl mb-7 text-center md:text-left">
          built with the vision to encourage open-source enthusiasts!built with
          the vision to encourage open-source enthusiasts!
        </p>
        <a
          href="https://www.figma.com/file/0eqV7t3UKKM14UeqCSfOZb/SeamLess-UI?node-id=3880%3A1442&t=xbQ8rnQ1WyJ1oO6d-0"
          target={"_blank"}
          rel="noreferrer"
          className=" flex justify-center md:justify-start"
        >
          <button className="text-[#7EE787] relative z-20 text-2xl hover:underline transition-all w-fit text-left ">
            Explore{" "}
          </button>
        </a>
      </div>
      <img
        className="md:p-10 p-2 md:w-5/12 w-full"
        src="/figma-dark 1.png"
        alt=""
        draggable={false}
      />
      <h1 className=" text-3xl mx-14 text-[#7EE787] text-center md:hidden ">
        SeamLess UI Figma
      </h1>
    </div>
  );
};

export default Explore;