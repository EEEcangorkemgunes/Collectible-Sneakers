"use client";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.png";
import logo3 from "@/public/logo3.png";
import user1 from "@/public/user1.png";
import user2 from "@/public/user2.png";
import user3 from "@/public/user3.png";
import leftButton from "@/public/left-button.png";
import rightButton from "@/public/right-button.png";
import { useEffect, useRef } from "react";

type CardProps = {
  logo: StaticImageData;
  description?: string;
  name?: string;
  job?: string;
  photo: StaticImageData;
};
function Card(props: CardProps) {
  return (
    <div className="z-10 h-min w-[319px]  p-6 gap-2 flex flex-col border rounded-[20px] border-[#E2E8F0] bg-white items-center shadow-[0px_0px_6px_0px_#00000012,0px_10px_15px_-3px_#0000001A] 2xl:w-[384px] 2xl:h-[430px] 2xl:justify-between 2xl:gap-4 2xl:p-8">
      <div className="h-16 w-full py-4">
        <Image src={props.logo} alt="asd" />
      </div>
      <p className="w-full text-[16px] leading-[22.4px] font-normal 2xl:text-[24px] 2xl:leading-[38.4px]">
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
  const peopleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    peopleRef.current?.scrollTo({ left: 780 });
  });

  return (
    <div className=" w-full flex flex-col items-center py-12 gap-8 relative 2xl:gap-20 2xl:p-20 2xl:bg-[#FFFDF3] ">
      <div className="w-full flex justify-center 2xl:justify-between ">
        <h1 className="text-[#0F172A] font-bold text-[32px] leading-[35.2px] 2xl:font-extrabold 2xl:text-[32px] 2xl:leading-[61.6px]">
          Because they love us
        </h1>
        <div className="hidden 2xl:flex gap-6 z-20">
          <button
            className="z-20"
            onClick={() => {
              peopleRef.current?.scrollTo({
                left: peopleRef.current.scrollLeft - 384,
              });
            }}
          >
            <Image src={leftButton} alt="left-button" />
          </button>
          <button
            className="z-20"
            onClick={() => {
              peopleRef.current?.scrollTo({
                left: peopleRef.current.scrollLeft + 384,
              });
            }}
          >
            <Image src={rightButton} alt="right-button" />
          </button>
        </div>
      </div>
      <div
        ref={peopleRef}
        className="scroll-smooth w-full h-[320px] gap-4 grid grid-flow-col overflow-x-auto px-4 z-20 2xl:px-0 2xl:overflow-x-hidden 2xl:w-[1440px] 2xl:h-[450px]"
      >
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
      <div className="w-full h-[277px] absolute bg-[#FDE68A] top-[99px]  z-0 2xl:top-[182px] 2xl:w-[1360px]" />
    </div>
  );
}
