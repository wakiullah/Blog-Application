import React from "react";

import {MdOutlineContentCopy} from 'react-icons/md'
 
const Sbanner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="w-full px-5 py-16 font-light text-gray-800 bg-white md:py-24">
        <div className="w-full max-w-6xl pb-5 mx-auto">
          <div className="items-center -mx-3 md:flex">
            <div className="px-3 mb-10 md:w-2/3 md:mb-0">
              <h1 className="mb-5 text-6xl font-bold leading-tight md:text-8xl">
                Web <br className="hidden md:block" />
                Development.
              </h1>
              <h3 className="leading-tight text-gray-600 mb-7">
                Subscribe now and receive the latest updates.
              </h3>
              <div>
                <span className="inline-block w-40 h-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-indigo-500 rounded-full"></span>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <form>
                <div className="flex mb-3">
                  
                  <div className="relative flex w-full">
                    <input
                      className="w-full h-12 px-4 pr-16 text-lg text-black transition border-2 rounded-md border-primary bg-red focus:outline-none "
                      name="search"
                      placeholder="Search"
                      disabled
                      value={'m.wakiullah1212@gmail.com'}
                    />
                    <button
                      type="submit"
                      className="absolute mr-4 right-2 top-3"
                    >
                     <MdOutlineContentCopy className="mt-1"/>
                    </button>
                  </div>
                </div>
                <div>
                  <button className="block w-full px-3 py-2 font-semibold text-white transition-colors bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:bg-indigo-700">
                    Contact US
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbanner;
