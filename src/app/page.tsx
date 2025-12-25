import Hero from "@/components/home/Hero";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import HandPickedSection from "@/components/home/HandPickedSection";
import ShopByBrandsSection from "@/components/home/SopByBrandsSection";
import HandpickedListItems from "@/components/home/HandpickedListItems";
import WomenSection from "@/components/home/WomenSection";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <NewArrivalsSection />
        <HandPickedSection>
          <HandpickedListItems />
        </HandPickedSection>
        <ShopByBrandsSection />
        <WomenSection />
      </main>
    </>
  );
}
