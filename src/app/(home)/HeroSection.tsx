"use client";

import Image from "next/image";
import React from "react";
import { usePostList } from "@/hooks/usePostList";
import { readFile } from "@/lib/utils";

export default function HeroSection() {
  const { posts } = usePostList();
  const filteredPosts = posts?.filter((post) => post.categoryIds?.[0] === process.env.HOME_HERO_CMS_ID) || [];
  const heroPost = filteredPosts?.find(post => post.featured) || filteredPosts?.[0];
  
  // Get images from CMS - expecting at least 2 images
  const image1 = heroPost?.images?.[0]?.url ? readFile(heroPost.images[0].url) : "/images/hero-burger.png";
  const image2 = heroPost?.images?.[1]?.url ? readFile(heroPost.images[1].url) : "/images/hero-burger.png";
  
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
            src={image1}
            alt="Burger 1"
            width={265}
            height={194}
            className="absolute top-[30px] right-[0px] rounded-lg object-cover"
          />
          <Image
            src={image2}
            alt="Burger 2"
            width={225}
            height={204}
            className="absolute top-[60px] -left-[10px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
