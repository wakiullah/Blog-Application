import Image from "next/image";
import React from "react";

const ImageLayout = ({ img, alt }) => {
  return (
    <Image
      className="z-0"
      src={img}
      alt={alt}
      title=""
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
    />
  );
};

export default ImageLayout;
