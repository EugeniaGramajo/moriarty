import Header from "@/components/layaout/header";
import Soft from "@/components/skills/soft";
import Tech from "@/components/skills/tech";
import React from "react";

export default function Home() {
  return (
    <main className="p-1">
      <div className="p-2 m-auto w-72 sm:w-[600px]">
        <Header title=""></Header>
        <section className="space-x-2">
          <Soft></Soft>
          <Tech></Tech>
        </section>
      </div>
    </main>
  );
}
