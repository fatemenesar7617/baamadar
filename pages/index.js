import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import BottomBaner from "@/components/BottomBanner/BottomBanner";
import Footer from "@/components/Footer/Footer";
import ProductSection from "@/components/Product/ProductSection";
import CategorySection from "@/components/Category/CategorySection";
import SearchBox from "@/components/SearchBox/SearchBox";
import FestivalBanner from "@/components/FestivalBanner/FestivalBanner";

export default function Home() {
  return (
    <main className="max-w-[375px] mx-auto min-h-screen bg-white">
  
      <Header/>
      <SearchBox/>
      <Banner/>
      <FestivalBanner/>
      <CategorySection/>
      <ProductSection/>
      <BottomBaner/>
      <Footer/>
    </main>
  );
}

