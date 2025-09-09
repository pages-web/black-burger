"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pageData from "@/data/layout.json";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Header = () => {
  const header = pageData.header;
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const isActive = (url: string) => pathName === url;
  const mobileLinks = [...header.nav.leftnav, ...header.nav.rightnav];

  return (
    <header className="w-full h-auto border-b bg-background/70">
      <div className="max-w-[1167px] flex items-center justify-between h-[57px] lg:h-[117px] mx-auto relative">
        
        <div className="lg:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 focus:outline-none z-50"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="max-w-[350px] w-full">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <div className="flex justify-between items-center px-4">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/Logo.png"
                      alt="logo"
                      width={100}
                      height={30}
                    />
                  </Link>
                  <button onClick={() => setOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </SheetHeader>

              <div className="flex flex-col pt-6">
                {mobileLinks.map((item, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-8 py-4 font-medium text-lg transition",
                        isActive(item.url) && "text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                    {index < mobileLinks.length - 1 && (
                      <div className="border-t border-gray-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden lg:flex items-center gap-4">
          {header.nav.leftnav.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={cn(
                "font-normal text-base uppercase text-muted border-r pr-3 border-[#4C4C4C]",
                isActive(item.url) && "underline text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative w-[87px] h-[67px] lg:w-[157px] lg:h-[127px] top-[13px]">
          <Link href="/">
            <Image src="/images/Logo.png" alt="logo" fill />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-4">
          {header.nav.rightnav.map((item, index) => {
            const isLast = index === header.nav.rightnav.length - 1;
            return isLast ? (
              <button
                key={index}
                onClick={() => setShowContactInfo((prev) => !prev)}
                className={cn(
                  "font-normal text-base uppercase text-muted border-l pl-3 border-[#4C4C4C]",
                  isActive(item.url) && "text-foreground underline"
                )}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={index}
                href={item.url}
                className={cn(
                  "font-normal text-base uppercase text-muted border-l pl-3 border-[#4C4C4C]",
                  isActive(item.url) && "text-foreground underline"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="lg:hidden w-6" />
      </div>

      <div
        className={cn(
          "bg-background/10 border-t overflow-hidden transition-all duration-500 ease-in-out z-10",
          showContactInfo ? "max-h-40 py-6" : "max-h-0 py-0"
        )}
      >
        <div className="px-[20px] lg:px-[138px]">
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 text-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-black">
                <Phone className="w-5 h-5" />
              </div>
              <span>(+976) 7711 2662</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-black">
                <Mail className="w-5 h-5" />
              </div>
              <span>soyolmaa.b@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-black">
                <Facebook className="w-5 h-5" />
              </div>
              <span>Get last updates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-black">
                <Instagram className="w-5 h-5" />
              </div>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
