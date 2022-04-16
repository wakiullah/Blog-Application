import React from "react";
import { useState } from "react";
import ButtonMore from "../Sort/ButtonMore";
import ImageLayout from "../Sort/ImageLayout";
// import bgImage from "/fullpage.png";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changePortFolioType = (index) => {
    // e.preventDefault();
    setActiveIndex(index);
  };
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto ">
        <div className="mb-10 text-3xl font-bold text-center text-gray-600">
          <h2>Portfolio</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap mx-auto mb-20">
            <a
              onClick={() => changePortFolioType(0)}
              className={`sm:px-6 py-3 w-1/2 ease-in duration-100 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider  ${
                activeIndex === 0
                  ? "bg-gray-100 border-custom-blue-500 text-indigo-500 rounded-t"
                  : "border-gray-200"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWinecap="round"
                strokeWinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Web Development
            </a>
            <a
              onClick={() => changePortFolioType(1)}
              className={`sm:px-6 py-3 w-1/2 ease-in duration-100 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider  ${
                activeIndex === 1
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t"
                  : "border-gray-200"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWinecap="round"
                strokeWinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Software Development
            </a>
            <a
              onClick={() => changePortFolioType(2)}
              className={`sm:px-6 py-3 w-1/2 ease-in duration-100 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider  ${
                activeIndex === 2
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t"
                  : "border-gray-200"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWinecap="round"
                strokeWinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              Graphic Design
            </a>
            <a
              onClick={() => changePortFolioType(3)}
              className={`sm:px-6 py-3 w-1/2 ease-in duration-100 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider  ${
                activeIndex === 3
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t"
                  : "border-gray-200"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWinecap="round"
                strokeWinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Marketing
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 gap-y-10">
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/fullpage.png')] bg-cover"></div>
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/tailwind.png')] bg-cover"></div>
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/rokomari.png')] bg-cover"></div>
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/rokomari.png')] bg-cover"></div>
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/fullpage.png')] bg-cover"></div>
          <div className="box  h-[350px] bg-black ease-in-out duration-[5000ms] bg-top hover:bg-bottom bg-[url('/tailwind.png')] bg-cover"></div>
        </div>
        <div className="mt-16 text-center">
          <ButtonMore value="See More Work" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
