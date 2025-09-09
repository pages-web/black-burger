"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Clock, Smile, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DialogContent, DialogTitle, Dialog } from "@/components/ui/dialog";
import pageData from "@/data/pages/home.json";
import { useProducts } from "@/hooks/useProducts";

interface MenuItem {
  name: string;
  image: string;
  shortDesc: string;
  calories: string;
  prepTime: string;
  details: {
    burgerName: string;
    longDesc: string;
    tags?: string[];
  };
}

export default function MenuSectionOld() {
  const { products } = useProducts();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const menuData = pageData.menu;
  const categories = menuData?.menu || [];
  const currentItems = categories[activeFilter]?.items || [];

  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <section className="flex justify-center relative py-[110px]">
      <div className="w-full max-w-[1107.38px] flex flex-col gap-10 px-8 lg:px-0">
        <div className="h-12 w-full border-b-2 border-border inline-flex justify-between items-start pb-2">
          <div className="w-36 inline-flex flex-col justify-start items-start gap-1">
            <div className="text-foreground text-3xl font-bold font-['Arial']">
              {products?.[0]?.category?.name || "Menu"}
            </div>
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <ChevronRight className="w-6 h-6 absolute outline-offset-[-0.71px] outline-foreground" />
          </div>
        </div>

        <div className="w-full flex justify-start">
          <div
            className="
              flex items-center gap-2 bg-secondary rounded-full
              overflow-x-auto sm:overflow-visible
              whitespace-nowrap scrollbar-hide
            "
          >
            {products.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => setActiveFilter(index)}
                className={`px-4 py-5 rounded-full text-base font-normal transition-all duration-200 ${
                  activeFilter === index
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
            {currentItems.map((item, index) => (
              <Card
                key={index}
                className="bg-secondary hover:bg-neutral-800 transition-colors cursor-pointer border-none"
                onClick={() => handleCardClick(item)}
              >
                <CardContent>
                  <div className="w-full h-43 relative rounded-[16px] overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-[10px]">
                    <div className="text-foreground text-base pt-1">
                      {item.name}
                    </div>
                    <div className="text-foreground font-medium text-base leading-tight">
                      {item.shortDesc}
                    </div>
                    <div className="flex items-center gap-4 text-muted text-sm py-[6px]">
                      <div className="flex items-center gap-1">
                        <Smile className="w-4 h-4" />
                        <span>{item.calories}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.prepTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTitle>
              <DialogContent className="w-[366px] md:w-[466px] md:h-[531px] lg:w-[466px] lg:h-[531px] bg-[#191616] rounded-[22px] py-[12px] md:py-[16px] lg:py-[16px] px-[14px] md:px-[17px] lg:px-[17px]">
                <div>
                  {selectedItem && (
                    <div>
                      <div>
                        <Image
                          src={selectedItem.image}
                          alt={selectedItem.name}
                          width={445}
                          height={325}
                          className="object-cover rounded-[22px] w-[374px] md:w-[445px] md:h-[325px] lg:w-[445px] lg:h-[325px]"
                        />
                      </div>
                      <div className="text-3xl font-semibold text-foreground pt-[22px]">
                        {selectedItem.details.burgerName}
                      </div>
                      <div>
                        {selectedItem.details?.tags && (
                          <div className="flex justify-between pt-3">
                            {selectedItem.details.tags.map(
                              (tag: string) => (
                                <span
                                  key={tag}
                                  className="text-xs text-foreground bg-secondary border border-neutral-600  md:px-7 lg:px-7 py-1 rounded-full min-w-[80px] text-center"
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-foreground text-[14.6px] pt-3">
                        {selectedItem.details.longDesc}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </DialogTitle>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
