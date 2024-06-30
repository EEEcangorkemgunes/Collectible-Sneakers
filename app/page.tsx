"use server";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import Section7 from "@/components/section7";

export default async function Home() {
  return (
    <div className="flex flex-col items-center w-[393px] min-h-screen h-max overflow-x-hidden xl:w-[1440px]">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}
