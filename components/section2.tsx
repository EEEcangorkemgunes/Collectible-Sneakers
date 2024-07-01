import { Trophy, Tunnel, Tv } from "iconoir-react";
import Image from "next/image";
import bgTriangle from "@/public/bgtriangle.png";
import triangleDown from "@/public/triangle-down.png";
import triangleRightDown from "@/public/triangle-right-down.png";
import circle from "@/public/circle.png";

export default function Section2() {
  return (
    <div className="w-full py-12 px-4 gap-8 bg-[#FEF3C7] h-max flex flex-col items-center 2xl:bg-[#FEFBEB] 2xl:flex-row 2xl:gap-20 2xl:p-20 relative">
      <div className="flex flex-col items-center gap-[10px] relative 2xl:items-start z-10">
        <Image
          className="absolute ml-12"
          src={triangleDown}
          alt="triangle down"
        />
        <Trophy
          className="text-[#78350F]"
          width={64}
          height={64}
          strokeWidth={0.6}
        />
        <h2 className="font-medium">Nibh viverra</h2>
        <p className="text-center 2xl:text-start">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] relative 2xl:items-start z-10">
        <Image
          className="absolute ml-6"
          src={triangleRightDown}
          alt="triangle down"
        />
        <Tunnel
          className="text-[#78350F]"
          width={64}
          height={64}
          strokeWidth={0.6}
        />
        <h2 className="font-medium">Cursus amet</h2>
        <p className="text-center 2xl:text-start">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] relative 2xl:items-start z-10">
        <Image className="absolute ml-16 2xl:ml-10" src={circle} alt="circle" />
        <Tv
          className="text-[#78350F]"
          width={64}
          height={64}
          strokeWidth={0.6}
        />
        <h2 className="font-medium">Ipsum fermentum</h2>
        <p className="text-center 2xl:text-start">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <Image
        src={bgTriangle}
        alt="bg-triangle"
        className="hidden absolute 2xl:block bottom-0 z-0"
      />
    </div>
  );
}
