import Image from "next/image";
import waves from "@/public/waves.png";
import ph1 from "@/public/ph1.png";
import ph2 from "@/public/ph2.png";

export default function Section6() {
  return (
    <div className="w-full relative flex flex-col pt-3 items-center px-4 pb-8 gap-8">
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
      <div className="z-10">
        <Image src={ph1} alt="ph1" />
        <Image src={ph2} alt="ph2" />
      </div>
      <Image className="absolute -bottom-1" src={waves} alt="waves" />
    </div>
  );
}
