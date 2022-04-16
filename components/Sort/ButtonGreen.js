import React from "react";

export default function ButtonGreen({ value, color }) {
  const bgColor = `bg-${color}-500`;

  return (
    <button
      className={`inline-flex text-white bg-green-500 hover:bg-green-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg`}
    >
      {value}
    </button>
  );
}
