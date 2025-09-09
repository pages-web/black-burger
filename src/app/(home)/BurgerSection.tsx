"use client";

import React from "react";
import Image from "next/image";
import pageData from "@/data/pages/home.json";
export default function BurgerSection() {
  const BurgerSection = pageData.aboutburger;
  const leftFeatures = BurgerSection.features.slice(0, 2);
  const rightFeatures = BurgerSection.features.slice(2);

  return (
    <section className="max-w-90rem py-[15px] relative flex flex-col justify-center items-center bg-neutral-900/80">
      <div className="inline-flex justify-center items-center gap-[55.7px]">
        <div className="w-72 flex flex-col justify-start items-start gap-[69.92px]">
          {leftFeatures.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-start gap-2"
            >
              <Image
                src={item.icon}
                alt="icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="text-foreground text-lg font-bold font-[Arial]">
                {" "}
                {item.label}{" "}
              </div>
              <div className="text-muted text-[14.85px] font-normal font-[Arial]">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[402px] h-[518px] relative">
          <Image
            src={BurgerSection.image}
            alt="Burger Illustration"
            fill
            className="pointer-events-none select-none object-contain"
          />
        </div>

        <div className="w-72 flex flex-col justify-start items-start gap-[69.92px]">
          {rightFeatures.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-start gap-2"
            >
              <Image
                src={item.icon}
                alt="icon"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <div className="text-foreground text-lg font-bold font-[Arial]">
                {" "}
                {item.label}{" "}
              </div>
              <div className="text-muted text-[14.85px] font-normal font-[Arial] w-full">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
