import { MenuScale } from "iconoir-react";

export default async function Navbar() {
  return (
    <div className="flex w-full justify-between h-[67px] p-4 font-bold text-[#78350F]">
      <h1 className="text-[32px] leading-[35px] pr-[5px]">Collers</h1>
      <MenuScale
        className="rotate-180 scale-x-100 -scale-y-100"
        height={24}
        width={24}
      />
    </div>
  );
}
