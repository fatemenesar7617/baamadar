import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import BottomBaner from "@/components/BottomBanner/BottomBanner";
import ProductSection from "@/components/Product/ProductSection";
import ProductDialog from "@/components/ProductDialog";
import CategorySection from "@/components/Category/CategorySection";
import SearchBox from "@/components/SearchBox/SearchBox";
import FestivalBanner from "@/components/FestivalBanner/FestivalBanner";
import { useCart } from "@/components/CartContext";

export default function Home() {
  const router = useRouter();
  const { cart, setCart, cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("modal:open", { detail: { open: dialogOpen } })
    );
    if (!dialogOpen) {
      window.dispatchEvent(new CustomEvent("modal:close"));
    }
  }, [dialogOpen]);

  return (
    <main className="max-w-[390px] mx-auto min-h-screen bg-white pb-20">
  
      <Header onCartClick={() => router.push("/cart")} cartCount={cartCount} />
      <SearchBox query={searchQuery} setQuery={setSearchQuery} />
      <Banner />
      <FestivalBanner />
      <CategorySection />
      <ProductSection
        cart={cart}
        setCart={setCart}
        searchQuery={searchQuery}
        onViewAll={() => router.push("/page2")}
        onProductClick={(product) => {
          setSelectedProduct(product);
          setDialogOpen(true);
        }}
      />
      <ProductSection
        cart={cart}
        setCart={setCart}
        searchQuery={searchQuery}
        title="محصولات پر تخفیف"
        subtitle="بیشترین تخفیف‌های روز"
        discountedOnly
        onViewAll={() => router.push("/page2?discount=1")}
        onProductClick={(product) => {
          setSelectedProduct(product);
          setDialogOpen(true);
        }}
      />
      <BottomBaner />

     <div className="relative w-full">
  <ProductDialog
    open={dialogOpen}
    onClose={() => setDialogOpen(false)}
    product={selectedProduct}
    cart={cart}
    setCart={setCart}
  />
</div>
    </main>
  );
}
