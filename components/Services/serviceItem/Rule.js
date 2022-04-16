import { Step } from "@/components/Global/Step";
import React from "react";

export default function Rule() {
  return (
    <section className="bg-gray-50">
      <div className="container pt-20 mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-500">Rules of our work</h2>
        </div>
        <Step />
      </div>
    </section>
  );
}
