import React from "react";
import { useEffect } from "react";
import ServiceIcon from "./ServiceIcon";

import { GoDeviceDesktop } from "react-icons/go";
export default function ServiceItemCard({ title, desc }) {
  return (
    <div className="w-full p-4 pt-0 text-center">
      <div className="w-full  bg-gray-50 group hover:bg-gray-900 h-full py-8 px-6 border-gray-900 border-2  bg-[100% 200%] bg-center rounded shadow-sm cursor-pointer duration-300 ease-in-out">
        <ServiceIcon>
          <GoDeviceDesktop />
        </ServiceIcon>
        <h3 className="my-4 text-2xl font-bold text-gray-700 group-hover:text-white">
          {title}
        </h3>
        <p className="leading-6 text-gray-600 group-hover:text-gray-300">
          {desc}
        </p>
      </div>
    </div>
  );
}
