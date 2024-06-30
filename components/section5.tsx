"use client";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.png";
import logo3 from "@/public/logo3.png";
import user1 from "@/public/user1.png";
import user2 from "@/public/user2.png";
import user3 from "@/public/user3.png";

type CardProps = {
  logo: StaticImageData;
  description?: string;
  name?: string;
  job?: string;
  photo: StaticImageData;
};
function Card(props: CardProps) {
  return (
    <div className="z-10 h-min w-[319px] p-6 gap-2 flex flex-col border rounded-[20px] border-[#E2E8F0] bg-white items-center shadow-[0px_0px_6px_0px_#00000012,0px_10px_15px_-3px_#0000001A]">
      <div className="h-16 w-full py-4">
        <Image src={props.logo} alt="asd" />
      </div>
      <p className="w-full text-[16px] leading-[22.4px] font-normal">
        {props.description}
      </p>
      <div className="w-full flex pt-4">
        <Image src={props.photo} alt="asd" />
        <div className="w-full pl-4">
          <p className="text-[18px] text-black font-medium">{props.name}</p>
          <p className="text-[#475569] text-[16px] h-min">{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default function Section5() {
  return (
    <div className=" w-full flex flex-col items-center py-12 gap-8 relative">
      <h1 className="text-[#0F172A] font-bold text-[32px] leading-[35.2px]">
        Because they love us
      </h1>
      <div className="w-full h-[310px] gap-4 grid grid-flow-col overflow-x-auto px-4">
        <Card
          description="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
          name="Hellen Jummy"
          logo={logo1}
          job="Team Lead"
          photo={user1}
        />
        <Card
          description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          name="Hellena John"
          logo={logo2}
          job="Co-founder"
          photo={user2}
        />
        <Card
          description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          name="David Oshodi"
          logo={logo3}
          job="Manager"
          photo={user3}
        />
      </div>
      <div className="w-full h-[277px] absolute bg-[#FDE68A] top-[99px] -z-20" />
    </div>
  );
}
