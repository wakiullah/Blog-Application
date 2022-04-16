import Image from "next/image";
import React from "react";

const TeamImg = ({ img }) => {
  return (
    <Image
      alt="team"
      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
      src={img}
      width={70}
      height={70}
    />
  );
};

export default TeamImg;
