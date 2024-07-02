import Image from "next/image";
import followUs from "@/public/follow-us.png";
import world from "@/public/world.png";

type CardProps = {
  title: string;
  opts: Array<string>;
  id: number;
};
function Card(props: CardProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="py-3 font-medium">{props.title}</h3>
      {props.opts.map((opt) => {
        return (
          <p key={opt} className="py-3 font-light">
            {opt}
          </p>
        );
      })}
    </div>
  );
}

const footOpts = [
  {
    id: 1,
    title: "Product",
    opts: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    id: 2,
    title: "Solutions",
    opts: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  },
  {
    id: 3,
    title: "Support",
    opts: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#0F172A] px-4 pt-12 text-white flex flex-col items-center gap-12 2xl:flex-row relative 2xl:pb-40  2xl:px-32">
      {footOpts.map((footOpt) => {
        return (
          <Card
            key={footOpt.id}
            title={footOpt.title}
            opts={footOpt.opts}
            id={footOpt.id}
          />
        );
      })}
      <Image src={followUs} alt="follow us section" />
      <div className="w-full py-12 flex flex-col items-center gap-6 2xl:absolute 2xl:bottom-0 2xl:flex-row 2xl:justify-between 2xl:h-24 2xl:w-[1440px]">
        <p className="leading-[22.4px] text-center">
          Collers @ 2023. All rights reserved.
        </p>
        <div className="w-full flex gap-8 justify-center items-center">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p className="flex">
            <Image src={world} alt="world" className="mr-2" />
            EN
          </p>
        </div>
      </div>
    </div>
  );
}
