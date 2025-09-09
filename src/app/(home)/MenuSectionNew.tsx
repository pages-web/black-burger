"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DialogContent, DialogTitle, Dialog } from "@/components/ui/dialog";
import { GET_PRODUCTS } from "@/graphql/queries/getProducts";
import { useQuery } from "@apollo/client";
import { useProductCategories } from "@/hooks/useProductCategories";
import { readFile } from "@/lib/utils";

interface Product {
  _id: string;
  name: string;
  shortName: string;
  description: string;
  calories?: string;
  prepTime?: string;
  attachment?: {
    url: string;
  };
  getTags?: Array<{ name: string }>;
}

interface MappedItem {
  image: string;
  name: string;
  shortDesc: string;
  details: {
    burgerName: string;
    longDesc: string;
    tags: string[];
  };
}

export default function MenuSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MappedItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const { categories } = useProductCategories();

  const { data: productsData, loading: productsLoading } = useQuery(GET_PRODUCTS, {
    variables: { categoryId: activeFilter || "" },
  });

  const products = productsData?.products || [];
  const handleCardClick = (item: Product) => {
    const imageUrl = item.attachment?.url ? readFile(item.attachment.url) : undefined;
    const mappedItem = {
      image: imageUrl || "",
      name: item.name,
      shortDesc: item.shortName,
      details: {
        burgerName: item.name,
        longDesc: item.description,
        tags: item.getTags?.map((t) => t.name) || [],
      }
    };
    setSelectedItem(mappedItem);
    setIsDialogOpen(true);
  };

  return (
    <section className="flex justify-center relative py-[110px]">
      <div className="w-full max-w-[1107px] flex flex-col gap-10 px-8 lg:px-0">

        <div className="h-12 w-full border-b-2 border-border pb-2">
          <div className="text-foreground text-3xl font-bold font-['Arial']">
            МЕНЮ
          </div>
        </div>

        <div className="w-full flex justify-start">
          <div className="flex items-center gap-2 bg-secondary rounded-full overflow-x-auto sm:overflow-visible whitespace-nowrap scrollbar-hide">
            <Button
              variant="ghost"
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-5 rounded-full text-base font-normal transition-all duration-200 ${
                activeFilter === null
                  ? "bg-primary text-foreground border border-red-600 hover:bg-primary/80 hover:text-foreground"
                  : "bg-secondary text-foreground hover:bg-neutral-800 hover:text-foreground"
              }`}
            >
              All Burgers
            </Button>

            {categories.map((category) => (
              <Button
                key={category._id}
                variant="ghost"
                onClick={() => setActiveFilter(category._id)}
                className={`px-4 py-5 rounded-full text-base font-normal transition-all duration-200 ${
                  activeFilter === category._id
                    ? "bg-primary text-foreground border border-red-600 hover:bg-primary/80 hover:text-foreground"
                    : "bg-secondary text-foreground hover:bg-neutral-800 hover:text-foreground"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[18px] md:gap-x-[28px] lg:gap-x-[48px] gap-y-[30px]">
            {productsLoading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <Card
                    key={idx}
                    className="bg-secondary border-none w-full"
                  >
                    <CardContent className="p-6">
                      <div className="w-full h-43 bg-neutral-700 animate-pulse rounded-[16px] relative overflow-hidden flex items-center justify-center mb-4"></div>
                      <div className="space-y-[10px]">
                        <div className="h-4 bg-neutral-700 animate-pulse rounded w-3/4 pt-1"></div>
                        <div className="h-4 bg-neutral-700 animate-pulse rounded w-full"></div>
                        <div className="flex items-center gap-4 text-sm py-[6px]">
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-neutral-700 animate-pulse rounded"></div>
                            <div className="h-3 bg-neutral-700 animate-pulse rounded w-8"></div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-neutral-700 animate-pulse rounded"></div>
                            <div className="h-3 bg-neutral-700 animate-pulse rounded w-12"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : products.map((item: Product, index: number) => {
                  const imageUrl = item.attachment ? readFile(item.attachment?.url) : undefined;
                  return (
                    <Card
                      key={index}
                      className="bg-secondary hover:bg-neutral-800 transition-colors cursor-pointer border-none"
                      onClick={() => handleCardClick(item)}
                    >
                      <CardContent>
                        <div className="w-full h-43 relative rounded-[16px] overflow-hidden flex items-center justify-center">
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="space-y-[10px]">
                          <div className="text-foreground text-base pt-1">{item.name}</div>
                          <div className="text-foreground font-medium text-base leading-tight">{item.shortName}</div>
                          <div className="flex items-center gap-4 text-muted text-sm py-[6px]">
                            <div className="flex items-center gap-1">
                              <Smile className="w-4 h-4" />
                              <span>{item.calories || "-"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.prepTime || "-"}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTitle>
              <DialogContent className="w-[366px] md:w-[466px] md:h-[531px] lg:w-[466px] lg:h-[531px] bg-[#191616] rounded-[22px] py-[12px] md:py-[16px] lg:py-[16px] px-[14px] md:px-[17px] lg:px-[17px]">
                {selectedItem && (
                  <div>
                    {selectedItem.image && (
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        width={445}
                        height={325}
                        className="object-cover rounded-[22px] w-[374px] md:w-[445px] md:h-[325px] lg:w-[445px] lg:h-[325px]"
                      />
                    )}
                    <div className="text-3xl font-semibold text-foreground pt-[22px]">
                      {selectedItem.details.burgerName}
                    </div>
                    {selectedItem.details?.tags && (
                      <div className="flex justify-between pt-3">
                        {selectedItem.details.tags.map((tag: string, idx: number) => (
                          <span
                            key={idx}
                            className="text-xs text-foreground bg-secondary border border-neutral-600 px-4 py-1 md:px-6 lg:px-7 rounded-full text-center"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-foreground text-[14.6px] pt-3">
                      <div dangerouslySetInnerHTML={{ __html: selectedItem.details.longDesc }} />
                    </div>
                  </div>
                )}
              </DialogContent>
            </DialogTitle>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
