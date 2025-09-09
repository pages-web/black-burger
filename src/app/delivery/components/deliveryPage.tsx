import React from "react";
import pageData from "@/data/pages/delivery.json";
import { PhoneIncoming, Link } from "lucide-react";
import { TbMapPin } from "react-icons/tb";
import Image from "next/image";

export default function DeliveryPage() {
  const delivery = pageData.delivery;

  return (
    <section className="w-full py-16 flex justify-center items-center bg-transparent px-8 sm:px-8 lg:px-8">
      <div className="w-full max-w-[1161px] flex flex-col gap-10 relative z-10">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-2">
          <div className="text-foreground text-2xl sm:text-3xl font-bold"> Хүргэлт</div>
        </div>

        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src={delivery.map}
            alt="Delivery Map"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between text-foreground text-lg items-start gap-6 sm:gap-0">
          <div className="flex items-start gap-2">
            <PhoneIncoming className="text-[#9D1914]" size={28} />
            <span className="text-xl sm:text-2xl font-normal">{delivery.phone}</span>
          </div>
          <div className="flex items-start gap-2">
            <Link className="text-[#9D1914]" size={28} />
            <span className="text-xl sm:text-2xl font-normal">{delivery.name}</span>
          </div>
          <div className="flex gap-2 max-w-full sm:max-w-[376px]">
            <div>
            <TbMapPin className="text-[#9D1914] " size={30}/>
            </div>
            <span className="text-xl sm:text-2xl font-normal break-words">{delivery.address}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
