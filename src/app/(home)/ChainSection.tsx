import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import pageData from "@/data/pages/home.json";

export default function ChainSection() {
  const ChainSection = pageData.chains;
  const dottedBg = ChainSection.background;

  return (
    <section className="w-full py-[44px] flex items-center justify-center px-8 lg:px-0">
      <div className="w-[1107.38px] inline-flex flex-col justify-start items-start z-10">
        <div className="self-stretch h-12 border-b-2 border-border inline-flex justify-between items-start pb-3">
          <div className="w-36 inline-flex flex-col justify-start items-start gap-1">
            <div className="text-foreground text-3xl font-bold font-['Arial']">
              Салбар
            </div>
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <ChevronRight className="w-6 h-6 absolute outline-offset-[-0.71px] outline-foreground" />
          </div>
        </div>
        <div className="pt-[87px]">
        {dottedBg && (
          <Image
            src={ChainSection.background}
            alt="Dotted background"
            width={1100}
            height={630}
            className="object-cover pointer-events-none select-none"
            style={{ objectFit: "cover" }}
          />
        )}
        </div>  
      </div>
    </section>
  );
}
