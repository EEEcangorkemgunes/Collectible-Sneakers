import { Trophy, Tunnel, Tv } from "iconoir-react";
import triangleDown from "@/public/triangle-down.png";
import triangleRightDown from "@/public/triangle-right-down.png";
import circle from "@/public/circle.png";
import Image from "next/image";

export default function Section2() {
  return (
    <div className="w-full py-12 px-4 gap-8 bg-[#FEF3C7] h-max flex flex-col items-center ">
      <div className="flex flex-col items-center gap-[10px] relative">
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
        <p className="text-center">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] relative">
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
        <p className="text-center">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Image className="absolute ml-16" src={circle} alt="triangle down" />
        <Tv
          className="text-[#78350F]"
          width={64}
          height={64}
          strokeWidth={0.6}
        />
        <h2 className="font-medium">Ipsum fermentum</h2>
        <p className="text-center">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
    </div>
  );
}
