import React from "react";
import ButtonGray from "../Sort/ButtonGray";
import ImageLayout from "../Sort/ImageLayout";

export default function SortAbout() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1790"
          height="844"
          viewBox="0 0 1790 844"
          fill="none"
        >
          <g clipPath="url(#clip0)">
            <path
              opacity="0.04"
              d="M641.446 458.434C942.063 425.822 1219.17 466.569 1457.25 570.706C1557.8 614.677 1650.21 666.269 1775.29 688.914C1900.74 710.827 2072.25 696.17 2193.01 625.816C2342.18 539.34 2350.75 410.652 2290.99 323.444C2165.47 139.572 1911.65 -11.9073 1514.73 13.7423C1205.4 33.6758 870.808 149.905 569.826 150.785C278.583 151.518 -72.9292 122.57 -374.131 147.707C-533.044 160.751 -566.511 130.851 -719.126 190.652C-935.892 275.002 -1142.77 385.809 -1275.91 517.795C-1409.04 649.854 -1457.89 804.631 -1363.05 904.372C-1114.14 1166.22 -441.285 831.16 -73.7348 663.705C173.789 549.82 414.648 482.911 641.446 458.434Z"
              fill="#4183D7"
            />
            <path
              opacity="0.04"
              d="M584.789 437.709C317.363 437.343 85.8189 498.335 -98.5669 610.653C-176.407 658.099 -245.68 711.329 -349.297 742.594C-453.352 773.273 -605.079 776.421 -724.659 726.632C-872.211 665.567 -969.97 704.666 -936.651 623.54C-866.646 452.573 -597.976 244.337 -248.536 229.694C23.7955 218.271 342.919 231.817 603.974 204.653C856.534 178.22 1191.84 93.5058 1458.24 87.3554C1598.69 83.9873 1897.09 49.6475 2042.01 87.3554C2247.7 140.293 2115.82 209.339 2259.05 311.333C2402.29 413.327 2477.34 542.852 2416.2 638.11C2255.76 888.08 1601.84 660.222 1247.93 549.222C1009.43 473.44 786.529 437.856 584.789 437.709Z"
              fill="#4183D7"
            />
            <path
              opacity="0.04"
              d="M720.663 611.569C1018.27 574.623 1300.14 611.789 1549.49 713.464C1654.8 756.422 1752.85 807.076 1880.49 828.188C2008.43 848.567 2178.62 831.414 2292.2 758.841C2432.51 669.701 2427.6 540.022 2358.62 452.935C2213.55 269.449 2047.31 155.092 1652.38 186.32C1334.48 185.514 917.874 297.672 616.529 302.657C324.923 307.349 93.807 201.348 -205.268 230.89C-363.007 246.285 -523.749 298.185 -670.284 360.569C-878.479 448.463 -1074.01 562.894 -1193.44 697.704C-1312.88 832.513 -1345.69 989.022 -1240.17 1088.21C-963.354 1348.52 -324.634 1001.85 25.8487 828.115C261.872 710.019 496.064 639.279 720.663 611.569Z"
              fill="#4183D7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="1790" height="844" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="pt-20 pb-5 text-gray-700 body-font"bg-gray-50>
          <div className="text-3xl font-bold text-center text-gray-600">
            <h2 className="">About Us</h2>
          </div>
          <div className="container flex flex-col items-center mx-auto md:flex-row ">
            <div className="hidden lg:block lg:w-5/12 xl:4/12">
              <ImageLayout img="/rajarani.jpeg" />
            </div>
            <div className="justify-start py-10 full lg:w-7/12 xl:w-8/12 lg:pl-12">
              <h5 className="mb-2 text-2xl font-medium text-gray-900">
                Raaj Rani Technology
              </h5>
              <p className="mb-4 text-lg text-gray-700">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
                <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
              </p>
              <ButtonGray value="Submit" color={"slate"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full p-6 lg:w-1/2">
  <p className="text-xs text-gray-600">Last updated 3 mins ago</p>
</div>; */
}
