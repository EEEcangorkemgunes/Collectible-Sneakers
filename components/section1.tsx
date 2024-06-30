import Image from "next/image";
import shoe from "@/public/shoe.png";

export default function Section1() {
  return (
    <div className="flex flex-col gap-8 w-full py-12 px-4 h-max relative">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full text-[#0F172A] h-[124px] text-center font-black text-[56px] p-0 leading-[61px]">
          Collectible Sneakers
        </div>
        <p className="w-full text-[#0F172A] text-center font-normal text-[18px] leading-[29px]">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="w-[347px] h-[56px] gap-4 flex">
          <button className="w-[179px] h-full border-2 rounded-lg border-[#78350F] text-[#78350F] font-medium text-[20px]">
            Sign up now
          </button>

          <button className="text-[#78350F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="inline "
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
              >
                <path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" />
                <path d="M8.909 7.864v8.27a.909.909 0 0 0 1.463.717l5.725-4.452a.909.909 0 0 0-.055-1.473L10.317 7.11a.909.909 0 0 0-1.408.754" />
              </g>
            </svg>
            <span className="pl-2 text-[16px] leading-[24px] font-bold">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-max flex justify-center items-center">
        <div className="bg-[#FBBF24] z-10 w-[273px] h-[276px] rounded-[50px] absolute" />
        <Image
          src={shoe}
          alt="shoe"
          className="z-20"
          width={361}
        />
      </div>
      <div className="absolute bottom-0 bg-transparent -ml-4  border-b-[324px] border-l-[393px] border-l-transparent border-b-[#FEF3C7]" />
    </div>
  );
}
