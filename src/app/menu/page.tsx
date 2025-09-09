import MenuPage from "./components/MenuPage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function () {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute top-10 left-[-10]">
        <Image
          src="/images/tomato.png"
          alt="tomato"
          width={180}
          height={268}
          className="blur-xs"
        />
      </div>
      <div className="absolute top-500 -left-23">
        <Image
          src="/images/tomato.png"
          alt="tomato"
          width={180}
          height={268}
          className="blur-[3px]"
        />
      </div>
      <div className="absolute top-265 right-9">
        <Image
          src="/images/tomato.png"
          alt="tomato"
          width={180}
          height={268}
          className="blur-[3px]"
        />
      </div>
      <div className="absolute top-668 right-10">
        <Image
          src="/images/tomato.png"
          alt="tomato"
          width={180}
          height={268}
          className="blur-[3px]"
        />
      </div>

      <div className="absolute top-45 right-145">
        <Image
          src="/images/jalapeno.png"
          alt="tomato"
          width={138}
          height={116}
          className="blur-[2px]"
        />
      </div>
      <div className="absolute top-492 right-103">
        <Image
          src="/images/jalapeno.png"
          alt="tomato"
          width={174}
          height={146}
          className="blur-[6px]"
        />
      </div>

      <div className="relative">
        <div className="absolute top-64 right-[-25px]">
          <Image
            src="/images/leaves.png"
            alt="tomato"
            width={278}
            height={380}
            className="scale-x-[-1] blur-[1px]"
          />
        </div>
      </div>
      <div className="absolute top-320 right-55">
        <Image src="/images/leaves.png" alt="tomato" width={278} height={380} />
      </div>
      <div className="absolute top-201 left-35">
        <Image
          src="/images/leaves.png"
          alt="tomato"
          width={278}
          height={380}
          className="blur-[8px]"
        />
      </div>
      <div className="absolute top-744 left-47">
        <Image
          src="/images/leaves.png"
          alt="tomato"
          width={278}
          height={380}
          className="blur-[1px]"
        />
      </div>

      <div className="relative">
        <div className="absolute top-521 right-[-120]">
          <Image
            src="/images/beef.png"
            alt="tomato"
            width={289}
            height={472}
            className="blur-[1px]"
          />
        </div>
      </div>
      <Header />
      <MenuPage />
      <Footer />
    </div>
  );
}
