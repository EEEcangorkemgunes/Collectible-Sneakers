import { MenuScale } from "iconoir-react";

export default async function Navbar() {
  return (
    <div className="flex w-full justify-between h-[67px] p-4  text-[#78350F] 2xl:py-6 2xl:px-20 2xl:bg-[#FEFBEB] 2xl:h-max">
      <h1 className="text-[32px] leading-[35px] pr-[5px] font-bold">Collers</h1>
      <MenuScale
        className="rotate-180 scale-x-100 -scale-y-100 2xl:hidden"
        height={24}
        width={24}
      />
      <ol className="hidden 2xl:flex font-medium gap-4">
        <li className="py-3 px-2">Products</li>
        <li className="py-3 px-2">Solutions</li>
        <li className="py-3 px-2">Pricing</li>
        <li className="py-3 px-2">Resources</li>
        <li className="py-3 px-2">Log In</li>
        <button className="py-2 px-7 border-[#78350F] border-2 rounded-lg">Sign up now</button>
      </ol>
    </div>
  );
}
