"use client";

import Image from "next/image";
import React from "react";
import { usePostList } from "@/hooks/usePostList";

export default function HeroSection() {
  const { posts } = usePostList();
  const heroPost = posts?.find(post => post.featured) || posts?.[0]
  return (
    <section className="w-full flex items-center justify-center bg-transparent pt-[64px] pb-[110px] max-lg:p-8 ">
      <div className="max-w-[1110px] flex flex-col-reverse lg:flex-row items-center justify-between gap-20 md:gap-5 lg:gap-[123px] relative">
        <div className="flex-1 space-y-[10px] w-full lg:w-[566px]">
          <div className="text-foreground text-[37px] sm:text-[37px] md:text-[37px] font-[Arial] font-bold uppercase">
            {heroPost?.title}
          </div>
          <div className="text-muted text-lg sm:text-lg md:text-lg text-justify sm:text-left">
            <div dangerouslySetInnerHTML={{ __html: heroPost?.content }} />
          </div>
        </div>

        <div className="relative w-[400px] h-[280px] max-sm:w-[300px] max-sm:h-[210px]">
          <Image
            src="/images/hero-burger.png"
            alt="Burger 1"
            width={265}
            height={194}
            className="absolute top-[30px] right-[0px] rounded-lg object-cover"
          />
          <Image
            src="/images/hero-burger.png"
            alt="Burger 2"
            width={225}
            height={204}
            className="absolute top-[60px] -left-[10px] rounded-lg object-cover"
          />

          {[{ left: "90px" }, { left: "200px" }].map((pos, index) => (
            <div
              key={index}
              className="absolute top-0"
              style={{ left: pos.left }}
            >
              <div className="w-24 h-24 rounded-full bg-neutral-800/20 border flex items-center justify-center">
                <div className="w-21 h-21 bg-secondary/90 rounded-full border p-2.5 flex flex-col items-center justify-center gap-1">
                  <Image
                    src="/images/hero-icon.png"
                    alt="icon"
                    width={23}
                    height={23}
                  />
                  <p className="text-center text-[10px] text-foreground leading-tight">
                    will be done in{" "}
                    <span className="text-red-600">5min</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
