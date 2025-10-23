"use client";

import React from "react";
import Image from "next/image";
import { usePostList } from "@/hooks/usePostList";
import { readFile } from "@/lib/utils";

export default function BurgerSection() {
  const { posts } = usePostList();
  const filteredPosts = posts?.filter((post) => post.categoryIds?.[0] === process.env.HOME_BURGER_CMS_ID) || [];
  
  // Map posts to features (expecting 4 posts for the 4 feature cards)
  const features = filteredPosts.slice(0, 4).map((post) => ({
    icon: post.images?.[0]?.url ? readFile(post.images[0].url) : "/images/placeholder-icon.png",
    label: post.title || "",
    description: post.content?.replace(/<[^>]*>/g, '').substring(0, 150) || "",
  }));
  
  const leftFeatures = features.slice(0, 2);
  const rightFeatures = features.slice(2, 4);

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
            src="/images/dissected-burger.png"
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
