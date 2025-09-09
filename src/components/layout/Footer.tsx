"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import data from "@/data/layout.json";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

export const Footer = () => {
  const { columns, social, copyright, policy } = data.footer;

  return (
    <footer className="relative w-full py-8 lg:py-12 min-h-[300px] bg-[url('/images/footer.png')] bg-cover bg-center text-foreground flex flex-col justify-between">
      <div className="absolute inset-0 bg-background opacity-80 z-0" />

      <div className="relative z-10 w-full max-w-[1167px] mx-auto px-6 md:px-12 lg:px-10 xl:px-0 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-8 border-b border-neutral-600 pb-6">
          {columns.map((column, i) => (
            <div key={i} className="flex flex-col gap-4 min-w-[150px]">
              {column.title !== "Холбоос" && (
                <div className="text-sm font-normal">{column.title}</div>
              )}

              {column.title === "Хаяг байршил"
                ? column.items.map((item, j) => (
                    <div key={j} className="flex gap-2">
                      <span className="text-xs font-medium">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-stone-300 opacity-60 max-w-xs">
                        {item.label}
                      </p>
                    </div>
                  ))
                : column.items.map((item, j) =>
                    "href" in item ? (
                      <Link
                        key={j}
                        href={item.href}
                        className="hidden lg:inline text-sm text-foreground hover:underline"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p key={j} className="text-sm text-stone-300">
                        {item.label}
                      </p>
                    )
                  )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-foreground/60 text-xs">
          <div>{copyright}</div>
          <div>{policy}</div>
          <div className="flex gap-4 text-lg">
            {social.map(({ name, url }, i) => {
              const Icon = socialIcons[name as keyof typeof socialIcons];
              return Icon ? (
                <Link key={i} href={url} target="_blank">
                  <Icon />
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
