import React from "react";
import skills from "@/data/texts/skills.json"

const Tech: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <section className="border-neutral-900 border-2 p-3">
          <h1>{skills.tech.title}</h1>
          <p>{skills.tech.description}</p>
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

export default Tech;
