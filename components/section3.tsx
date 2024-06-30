import Image, { StaticImageData } from "next/image";
import shoePicture from "@/public/shoepicture.png";
import shoePicture1 from "@/public/shoepicture1.png";
import shoePicture2 from "@/public/shoepicture2.png";
import shoppingCart from "@/public/shopping-cart.png";
import reactangle1 from "@/public/rectangle1.png";
import reactangle2 from "@/public/rectangle2.png";
import reactangle3 from "@/public/rectangle3.png";

type CardProps = {
  title: string;
  description: string;
  photo: StaticImageData;
};
function Card({
  title,
  description,
  photo,
}: {
  title: CardProps["title"];
  description: CardProps["description"];
  photo: CardProps["photo"];
}) {
  return (
    <div className=" relative z-10 bg-[#0F172A] shadow-[0px_0px_15px_0px_#FFFFFF12,0px_25px_50px_-12px_#FFFFFF40] rounded-[10px] border-solid border-[#0F172A] border-[1px]">
      <Image src={photo} alt="shoe_photo" className="rounded-t-[10px] " />
      <div className="w-full p-8 pb-0 gap-4 flex flex-col ">
        <h2 className="text-[24px] font-semibold leading-[26px]">{title}</h2>
        <p className="text-[18px] leading-7 font-[400]">{description}</p>
      </div>
      <div className="w-full h-[120px] flex justify-center items-center">
        <button className=" w-[297px] h-14 flex justify-center items-center gap border-2 rounded-lg border-white border-solid">
          <Image
            src={shoppingCart}
            width={24}
            height={24}
            alt="shopping-cart"
            className="text-white"
          />
          <span className="text-[20px] leading-6 font-medium px-4">
            Buy Now
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Section3() {
  return (
    <div className="-z-10 flex flex-col items-center w-full py-12 px-4 gap-8 bg-[#0F172A] text-white relative">
      <div className="flex w-full h-[131px] flex-col items-center justify-between">
        <h1 className="text-[32px] font-medium leading-[35px]">
          The best of the best
        </h1>
        <button className="w-[233px] h-[64px] border-2 rounded-lg text-[24px]">
          Sign up now
        </button>
      </div>
      <Card
        title="Title"
        description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        photo={shoePicture}
      />
      <Card
        title="Title"
        description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        photo={shoePicture1}
      />
      <Card
        title="Title"
        description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        photo={shoePicture2}
      />
      <Image
        className="absolute top-[513.8px] left-[36.5px] z-0"
        src={reactangle1}
        alt="rectangle-photo"
      />
      <Image
        className="absolute top-[854.6px] left-[272px] z-0"
        src={reactangle2}
        alt="rectangle-photo"
      />
      <Image
        className="absolute top-[1272.21px] left-0 z-0"
        src={reactangle3}
        alt="rectangle-photo"
      />
    </div>
  );
}
