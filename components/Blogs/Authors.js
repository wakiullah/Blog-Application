import React from "react";

export default function Authors() {
  return (
    <div className="px-8 mt-16">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
      <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
        <ul className="-mx-4">
          <li className="flex items-center">
          
            <p>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:underline"
              >
                Alex John
              </a>
              <span className="text-sm font-light text-gray-700">
                Created 23 Posts
              </span>
            </p>
          </li>
          <li className="flex items-center mt-6">
            
            <p>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:underline"
              >
                Jane Doe
              </a>
              <span className="text-sm font-light text-gray-700">
                Created 52 Posts
              </span>
            </p>
          </li>
          <li className="flex items-center mt-6">
            
            <p>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:underline "
              >
                Lisa Way
              </a>
              <span className="text-sm font-light text-gray-700">
                Created 73 Posts
              </span>
            </p>
          </li>
          <li className="flex items-center mt-6">
            
            <p>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:underline"
              >
                Steve Matt
              </a>
              <span className="text-sm font-light text-gray-700">
                Created 245 Posts
              </span>
            </p>
          </li>
          <li className="flex items-center mt-6">
            {/* <img
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
              alt="avatar"
              className="object-cover w-10 h-10 mx-4 rounded-full"
            /> */}
            <p>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:underline"
              >
                Khatab Wedaa
              </a>
              <span className="text-sm font-light text-gray-700">
                Created 332 Posts
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
