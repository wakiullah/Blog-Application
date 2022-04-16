import React from "react";
import styles from "@/styles/service.module.css";
import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { AiFillContainer, AiOutlineAntDesign } from "react-icons/ai";
import ServiceIcon from "./ServiceIcon";
import ButtonMore from "../Sort/ButtonMore";
import ServiceItemCard from "./ServiceItemCard";

export default function Service({ services }) {

  return (
    <section className="container mx-auto">
      <div className="text-center">
        <h2 className="mt-20 mb-10 text-3xl font-bold text-gray-600 section-heading">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-3">
        {services.map((service, i) => (
          <ServiceItemCard
            key={i}
            title={service.title}
            desc={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mt-10 mb-20 text-center">
        <ButtonMore value={'Show More Services'}/>
      </div>
    </section>
  );
}
