import React from "react";

export default function ButtonMore({ value }) {
  return (
    <button className="text-center bg-white px-7 py-3 border-[3px] rounded-md text-xl font-medium border-gray-900 hover:text-white hover:bg-gray-800">
      {value}
    </button>
  );
}
