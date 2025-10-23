"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { usePostList } from "@/hooks/usePostList";
import { readFile } from "@/lib/utils";

export default function NewsGrid() {
  const { posts, loading } = usePostList();
  const filteredNews = posts?.filter((post) => post.categoryIds?.[0] === process.env.NEWS_CMS_ID) || [];
  
  const newsArray = filteredNews.slice(0, 5).map((post) => ({
    image: post.images?.[0]?.url ? readFile(post.images[0].url) : "/images/placeholder.png",
    label: post.title || "",
    description: post.content?.replace(/<[^>]*>/g, '').substring(0, 100) || "",
  }));

  // Show loading or empty state if not enough posts
  if (loading || newsArray.length < 5) {
    return (
      <div className="flex flex-col items-center gap-[66px] pt-[110px] pb-[64px] px-8 lg:px-0">
        <div className="w-full max-w-[1098px] border-b-2 border-border flex justify-between items-center pb-2">
          <div className="text-foreground text-3xl font-bold">Мэдээ</div>
          <ChevronRight className="w-6 h-6 text-foreground" />
        </div>
        <div className="text-muted">Loading news...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[66px] pt-[110px] pb-[64px] px-8 lg:px-0">
      <div className="w-full max-w-[1098px] border-b-2 border-border flex justify-between items-center pb-2">
        <div className="text-foreground text-3xl font-bold">Мэдээ</div>
        <ChevronRight className="w-6 h-6 text-foreground" />
      </div>

      <div
        className="grid gap-6 
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-[335px_1fr_335px] 
        lg:grid-rows-[203px_203px]
        w-full max-w-[1098px] lg:px-0"
      >
        {newsArray[0] && <NewsCard {...newsArray[0]} />}

        {newsArray[1] && (
          <div
            className="relative w-full aspect-[335/203] overflow-hidden rounded-lg
                       md:aspect-[4/3]
                       lg:w-full lg:h-[432px] lg:aspect-auto lg:row-span-2"
          >
            <Image
              src={newsArray[1].image}
              alt={newsArray[1].label}
              fill
              className="object-cover"
            />
            <CardOverlay
              label={newsArray[1].label}
              description={newsArray[1].description}
            />
          </div>
        )}

        {newsArray[2] && <NewsCard {...newsArray[2]} />}
        {newsArray[3] && <NewsCard {...newsArray[3]} />}
        {newsArray[4] && <NewsCard {...newsArray[4]} />}
      </div>
    </div>
  );
}

function NewsCard({
  image,
  label,
  description,
}: {
  image: string;
  label: string;
  description: string;
}) {
  return (
    <div
      className="relative w-full aspect-[335/203] overflow-hidden rounded-lg
                 lg:w-[335px] lg:h-[203px] lg:aspect-auto mx-auto lg:mx-0"
    >
      <Image src={image} alt={label} fill className="object-cover" />
      <CardOverlay label={label} description={description} />
    </div>
  );
}

function CardOverlay({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="absolute inset-0 group">
      <div
        className="absolute inset-0 flex flex-col justify-end px-[26px] py-[22px]
        text-start text-white transition-all duration-300 opacity-0 
        group-hover:opacity-100 group-hover:bg-black/40 group-hover:backdrop-blur-sm"
      >
        <div className="text-xl font-bold mb-2">{label}</div>
        <p className="text-base leading-snug">{description}</p>
      </div>

      <div
        className="absolute bottom-[22px] left-[26px] text-white text-xl font-bold drop-shadow
        transition-opacity duration-300 group-hover:opacity-0"
      >
        {label}
      </div>
    </div>
  );
}
