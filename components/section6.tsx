import Image from "next/image";
import wavesDesktop from "@/public/waves-desktop.png";
import ph1 from "@/public/ph1.png";
import ph2 from "@/public/ph2.png";
import ph3 from "@/public/ph3.png";
import screens from "@/public/screens.png";

export default function Section6() {
  return (
    <div className="w-full relative flex flex-col pt-3 items-center px-4 pb-4 gap-8 2xl:pt-20 2xl:px-20 2xl:pb-32 2xl:bg-[#FFFDF3]">
      <div className="flex flex-col items-center gap-8 text-[#0F172A]">
        <h1 className="font-bold text-[32px] leading-[35.2px] text-center ">
          Grow your collection
        </h1>
        <p className="text-base leading-[22.4px] text-center ">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="z-10 2xl:flex w-full h-max">
        <Image src={ph1} alt="ph1" className="2xl:hidden" />
        <Image src={ph2} alt="ph2" className="2xl:hidden" />
        <Image src={ph3} alt="ph3" className="hidden 2xl:block h-[420px]" />
        <Image src={screens} alt="screens" className="hidden 2xl:block h-[634px]" />
      </div>
      <Image className="absolute bottom-0" src={wavesDesktop} alt="waves" />
    </div>
  );
}
