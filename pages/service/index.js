import ServiceItemCard from "@/components/Services/ServiceItemCard";
import Services from "@/components/Services/Services";
import React from "react";

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
    </section>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/service");
  const services = await res.json();

  return {
    props: {
      services,
    },
  };
};
