"use client";
import React, { useState } from "react";
import chainsData from "@/data/pages/chains.json";
import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { FiMapPin } from "react-icons/fi";

import Image from "next/image";

export default function ChainsPage() {
  const chains = chainsData.chains;
  const [selectedLocation, setSelectedLocation] = useState(chains.locations[0]);
  const [selectedBranch, setSelectedBranch] = useState("Branch");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocationClick = (location: any) => {
    setSelectedLocation(location);
  };

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch);
    setIsDropdownOpen(false);
  };

  return (
    <section className="w-full py-[64px] bg-black flex justify-center">
      <div className="w-full max-w-[1165px] flex flex-col gap-6 z-10">
        <div className="w-full flex justify-between items-center border-b-2 border-border pb-2">
          <div className="text-foreground text-3xl font-bold">
            Салбар
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="w-[609px] flex flex-col gap-6">
            <div className="flex gap-2">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2 bg-[#1E1E1E] text-foreground rounded-[8px] w-[370px] h-[44px] flex items-center justify-between"
                >
                  <span>{selectedBranch}</span>
                  <ChevronDown 
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[370px] bg-[#1E1E1E] rounded-[8px] shadow-lg z-50">
                    <button
                      onClick={() => handleBranchSelect("Branch")}
                      className="w-full px-4 py-2 text-left text-foreground hover:bg-[#2A2A2A] transition-colors"
                    >
                      Branch
                    </button>
                    {chains.locations.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => handleBranchSelect(loc.branch)}
                        className="w-full px-4 py-2 text-left text-foreground hover:bg-[#2A2A2A] transition-colors"
                      >
                        {loc.branch}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button className="px-4 py-2 bg-[#1E1E1E] text-foreground rounded-[8px] w-[227px] h-[44px]">
                Ойролцоо хаяг
              </button>
            </div>

            <div className="flex flex-col gap-[20px]">
              {chains.locations.map((location) => (
                <div
                  key={location.id}
                  onClick={() => handleLocationClick(location)}
                  className={`flex bg-[#1E1E1E] text-foreground p-[20px] rounded-xl border overflow-hidden cursor-pointer transition-all duration-200 hover:bg-[#2A2A2A] h-[298px] ${
                    selectedLocation.id === location.id
                      ? "border-red-500 shadow-lg shadow-red-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="w-[242px] h-[258px] relative flex-shrink-0">
                    <Image
                      src={location.image}
                      alt={location.branch}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="pl-[27px] flex flex-col justify-start gap-[16px] text-sm w-full">
                    <div>
                      <div className="text-[20px] font-normal">
                        {location.brand}{" "}
                        <span className="text-red-500">{location.branch}</span>
                      </div>

                      <div className="flex items-start gap-[10px] mt-[16px]">
                        <FiMapPin
                          className="text-foreground"
                          size={48}
                          strokeWidth={1}
                        />
                        <p className="leading-tight">{location.address}</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex items-start gap-[10px]">
                        <Clock
                          className="text-foreground mt-1"
                          strokeWidth={1}
                          size={24}
                        />
                        <div className="space-y-">
                          {Object.entries(location.hours).map(([day, time]) => (
                            <div key={day} className="flex gap-1">
                              <span className="font-medium">{day}:</span>
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-base gap-[10px]">
                      <Phone
                        className="text-foreground"
                        size={24}
                        strokeWidth={1}
                      />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden w-[540px] h-[683px] relative">
            <iframe
              key={selectedLocation.id}
              src={selectedLocation.mapUrl}
              className="w-full h-full rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
