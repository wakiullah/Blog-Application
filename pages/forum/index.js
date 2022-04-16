import Catagories from "@/components/Blogs/Catagories";
import ForumPost from "@/components/Forum/ForumPost";
import React from "react";

export default function Index() {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <div className="px-6 py-8 mt-16">
        <div className="container flex justify-between mx-auto">
          <div className="w-full lg:w-8/12">
            <div>
              <h2 className="text-3xl font-semibold">Express your opinion</h2>
            </div>
            <div>
              <ForumPost/>
              <ForumPost/>
              <ForumPost/>
            </div>
          </div>
          <div className="hidden w-4/12 -mx-8 lg:block">
         
            <Catagories />
      
          </div>
        </div>
      </div>
    </div>
  );
}
