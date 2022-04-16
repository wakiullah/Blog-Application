import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="font-extrabold tracking-widest text-white text-7xl">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-xl  rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block text-lg px-8 py-3 bg-[#1A2238] border border-current">
           <Link href='/'>
             <a >Home</a>
           </Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default ErrorPage;

ErrorPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
