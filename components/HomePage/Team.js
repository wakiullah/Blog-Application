import React from "react";
import { useState } from "react";
import TeamImg from "./TeamImg";

export default function Team() {
  const [teams, setTeams] = useState([
    { name: "Holden Caulfield", terms: "UI Designer", img: "/rajarani.jpeg" },
    {
      name: "Holden Caulfield",
      terms: "Graphic Designer",
      img: "/rajarani.jpeg",
    },
    { name: "Holden Caulfield", terms: "Web Designer", img: "/rajarani.jpeg" },
    { name: "Holden Caulfield", terms: "UI Designer", img: "/rajarani.jpeg" },
    { name: "Holden Caulfield", terms: "App Designer", img: "/rajarani.jpeg" },
    {
      name: "Holden Caulfield",
      terms: "Software Designer",
      img: "/rajarani.jpeg",
    },
  ]);

  return (
    <section className=" text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-center mb-10 text-gray-600 font-bold text-3xl">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos t heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teams.map((member, i) => (
            <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <TeamImg img={member.img} />

                <div className="flex-grow pl-5">
                  <h2 className="text-gray-900 title-font font-medium">
                    {member.name}
                  </h2>
                  <p className="text-gray-500">{member.terms}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
