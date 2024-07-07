import React from "react";
import skills from "@/data/texts/skills.json"

const Soft: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <section className="border-neutral-900 border-2 p-3">
          <h1>{skills.soft.title}</h1>
          <p>{skills.soft.description}</p>
        </section>

        <section>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Soft;
