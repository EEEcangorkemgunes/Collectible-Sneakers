import Image from "next/image";
import mp from "@/public/map.png";
import mpDesktop from "@/public/map-desktop.png";
import ellipses from "@/public/ellipses.png";
import ellipsesDesktop from "@/public/ellipses-desktop.png";
import col from "@/public/col.png";

export default function Section7() {
  return (
    <div className="w-full h-[717px] bg-[#78350f] py-12 px-4 relative flex justify-center items-center">
      <div className="z-20">
        <p className=" text-[#FFFBEB] font-extrabold text-[48px] leading-[52.8px] text-center 2xl:text-[96px] 2xl:leading-[105.6px]">
          11,658,467
        </p>
        <p className="text-[#FFFBEB] text-center font-bold text-[32px] leading-[35.2px] 2xl:text-[56px] 2xl:leading-[61.6px] 2xl:font-extrabold">
          Shoes Collected
        </p>
      </div>
      <Image className="absolute left-5 z-0 2xl:hidden" src={mp} alt={"map"} />
      <Image
        className="z-0 absolute left-[232px] top-[107px] 2xl:hidden"
        src={ellipses}
        alt="ellipses"
      />
      <Image src={ellipsesDesktop} alt="ellipses" className="absolute" />
      <Image src={mpDesktop} alt="mpDesktop" className="absolute" />
      <Image
        className="absolute left-12 top-[11px]  2xl:left-[225px]"
        src={col}
        alt="col"
      />
    </div>
  );
}
