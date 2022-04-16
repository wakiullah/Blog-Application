import Pricing from "@/components/Global/Pricing";
import Rule from "@/components/Services/serviceItem/Rule";
import Sbanner from "@/components/Services/serviceItem/SBanner";
import React from "react";

export default function serviceName() {
  return (
    <>
      <Sbanner />
      <Rule />
      <Pricing />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { serviceName: "web-design" } },
      { params: { serviceName: "graphic-design" } },
      { params: { serviceName: "digital-marketing" } },
      { params: { serviceName: "ux-ui-design" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      name: "Web Design",
    },
  };
}
