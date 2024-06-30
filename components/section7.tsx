import Image from "next/image";
import mp from "@/public/map.png";
import ellipses from "@/public/ellipses.png";
import col from "@/public/col.png"

export default function Section7() {
  return (
    <div className="w-full h-[717px] bg-[#78350f] py-12 px-4 relative flex justify-center items-center">
      <div className="z-20">
        <p className=" text-[#FFFBEB] font-extrabold text-[48px] leading-[52.8px] text-center">
          11,658,467
        </p>
        <p className="text-[#FFFBEB] text-center font-bold text-[32px] leading-[35.2px]">
          Shoes Collected
        </p>
      </div>
      <Image className="absolute left-5 z-0" src={mp} alt={"map"} />
      <Image
        className="z-0 absolute left-[232px] top-[107px]"
        src={ellipses}
        alt="ellipses"
      />
      <Image className="absolute left-12 top-[11px]" src={col} alt="col"/>
    </div>
  );
}
