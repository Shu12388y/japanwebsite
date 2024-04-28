import HeroSection from "@/components/HeroSection";
import {CtaFour} from "@/components/CTA";
import CardFlex from "@/components/CardFlex";
import Jobs from "@/components/Jobs";
import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <>
    <section className="overflow-x-hidden px-3">

    <section>
      <HeroSection/>
    </section>
    <section>
      <h1 className="text-center text-3xl pt-[4rem] font-bold">Jobs In Japan</h1>
      <Jobs/>
    </section>
    <section>
      <Gallery/>

    </section>
    <section className="px-[5rem]">
      <CardFlex/>

    </section>
    <section>
      <CtaFour/>
    </section>
    </section>
    
    </>
    
    
  );
}
