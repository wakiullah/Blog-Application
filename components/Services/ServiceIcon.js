import React from "react";
import styles from "@/styles/service.module.css";

export default function ServiceIcon({ children }) {
  return (
    
      <div className="icon  text-white group-hover:text-gray-800 bg-gray-800  group-hover:bg-white grid place-items-center relative rounded-full w-16  h-16 leading-[90px] transition-all text-red text-[40px] mb-3 mx-auto">
        {children}
        <div
          className={`${styles.circleBox} circles-box absolute top-0 left-0 bottom-0 right-0 rounded-full `}
        >
          <div className="circle-one absolute left-1 bottom-1 w-[10px] h-[10px]  z-10 rounded-full bg-white group-hover:bg-gray-900"></div>
          <div className="circle-two  absolute right-1 top-1 w-[10px] h-[10px] z-10 rounded-full bg-purple-600"></div>
        </div>
      </div>
  );
}
