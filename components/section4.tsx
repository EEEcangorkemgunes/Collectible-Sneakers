import Image from "next/image";
import check from "@/public/check.png";
import video from "@/public/video.png";
import rectangle4 from "@/public/rectangle4.png";
import rectangle5 from "@/public/rectangle5.png";
import rectangle6 from "@/public/rectangle6.png";
import rectangle7 from "@/public/rectangle7.png";
import rectangle8 from "@/public/rectangle8.png";
import rectangle9 from "@/public/rectangle9.png";
export default function () {
  return (
    <div className="w-full p-4 pb-14 bg-white 2xl:py-40 2xl:px-20 2xl:bg-[#FFFDF3]">
      <div className="z-10 bg-white w-full py-8 px-4 flex flex-col items-center gap-8 rounded-[30px] shadow-[0px_0px_10px_0px_#00000012,0px_20px_25px_-5px_#0000001A]  relative 2xl:flex-row 2xl:p-20 2xl:gap-20">
        <div className="w-full gap-6 flex flex-col items-center 2xl:items-start">
          <h2 className="text-[32px] font-bold leading-[35.2px] 2xl:text-[56px] 2xl:font-extrabold">
            Why join us
          </h2>
          <ol className="w-full flex  flex-col gap-2 items-center">
            <li className="w-full flex items-start justify-between">
              <Image className="" src={check} alt="check" />
              <span className="w-[297px] text-[16px] leading-[22.4px] font-normal">
                Est et in pharetra magna adipiscing ornare aliquam.
              </span>
            </li>
            <li className="w-full flex items-start justify-between">
              <Image src={check} alt="check" />
              <span className="w-[297px] text-[16px] leading-[22.4px] font-normal">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </span>
            </li>
            <li className="w-full flex items-start justify-between">
              <Image src={check} alt="check" />
              <span className="w-[297px] text-[16px] leading-[22.4px] font-normal">
                Ullamcorper ornare in et egestas dolor orci.
              </span>
            </li>
          </ol>
          <button className="w-[179px] h-[56px] border-solid border-[#78350F] border-2 rounded-lg text-[#78350F] text-[20px] font-medium">
            Sign up now
          </button>
        </div>
        <div className="z-10 w-full bg-white shadow-[0px_0px_15px_0px_#00000012,0px_25px_50px_-12px_#00000040] rounded-[20px] border-white">
          <div className="w-full bg-white h-[41px] flex items-center justify-center px-4">
            <div className="w-full h-[10px] flex gap-[5px]">
              <div className="rounded-full w-[8.33px] h-[8.33px] bg-[#E11D48]" />
              <div className="rounded-full w-[8.33px] h-[8.33px] bg-[#FBBF24]" />
              <div className="rounded-full w-[8.33px] h-[8.33px] bg-[#22C55E]" />
            </div>
          </div>
          <Image
            src={video}
            alt="video"
            className="z-10 bg-white -mt-5 w-full border-[5px] border-transparent rounded-[20px]"
          />
          <Image
            src={rectangle9}
            alt="rectangle"
            className="absolute bottom-3 left-[64px] 2xl:hidden"
          />
        </div>
        <Image
          src={rectangle4}
          alt="rectangle"
          className="z-0 absolute top-[509.81px] left-[265.73px] 2xl:hidden"
        />
        <Image
          src={rectangle5}
          alt="rectangle"
          className="z-0 absolute top-[306.69px] left-[276.84px] 2xl:hidden"
        />
        <Image
          src={rectangle6}
          alt="rectangle"
          className="z-0 absolute top-[376.46px] left-[-5.91px] 2xl:hidden"
        />
        <Image
          src={rectangle7}
          alt="rectangle"
          className="z-0 absolute top-[558.58px] left-[242.88px] 2xl:hidden"
        />
        <Image
          src={rectangle8}
          alt="rectangle"
          className="-z-10 absolute top-[279px] left-[-16px] 2xl:hidden"
        />
        <div className="hidden absolute 2xl:block bg-[#BE185D] w-[218px] h-[218px] opacity-75 -right-[38px] -bottom-9 rounded-[50px]" />
        <div className="hidden absolute 2xl:block bg-[#0369A1] w-[59px] h-[60px] opacity-75 right-[103px] -top-[15px] rounded-[50px] z-10" />
        <div className="hidden absolute 2xl:block bg-[#B45309] w-[90px] h-[90px] opacity-75 right-[530px] top-[98px] rounded-[30px]" />
        <div className="hidden absolute 2xl:block bg-[#A21CAF] w-[74px] h-[74px] opacity-75 right-[143px] bottom-[29px] rounded-[30px]" />
        <div className="hidden absolute 2xl:block bg-[#FDE68A] w-[666.28px] h-[217.93px] right-[30px] top-[145px] -rotate-45 z-0" />
      </div>
    </div>
  );
}
