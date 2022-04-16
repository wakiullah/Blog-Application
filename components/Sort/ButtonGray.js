import React from "react";

export default function ButtonGreen({ value }) {


  return (
    <button
      className={`inline-flex text-white bg-gray-700 hover:bg-gray-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg`}
    >
      {value}
    </button>
  );
}
