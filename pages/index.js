import { useState } from "react";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import BottomBaner from "@/components/BottomBanner/BottomBanner";
import Footer from "@/components/Footer/Footer";
import ProductSection from "@/components/Product/ProductSection";
import ProductDialog from "@/components/ProductDialog";
import CategorySection from "@/components/Category/CategorySection";
import SearchBox from "@/components/SearchBox/SearchBox";
import FestivalBanner from "@/components/FestivalBanner/FestivalBanner";
import CartModal from "@/components/phone-one/CartModal";
import OrdersModal from "@/components/phone-one/OrdersModal";
import ProfileModal from "@/components/phone-one/ProfileModal";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="max-w-[375px] mx-auto min-h-screen bg-white">
  
      <Header onCartClick={() => setCartOpen(true)} cartCount={cartCount} />
      <SearchBox query={searchQuery} setQuery={setSearchQuery} />
      <Banner />
      <FestivalBanner />
      <CategorySection cart={cart} setCart={setCart} />
      <ProductSection
        cart={cart}
        setCart={setCart}
        searchQuery={searchQuery}
        onProductClick={(product) => {
          setSelectedProduct(product);
          setDialogOpen(true);
        }}
      />
      <BottomBaner />
      <Footer
        onCartClick={() => setCartOpen(true)}
        onOrdersClick={() => setOrdersOpen(true)}
        onProfileClick={() => setProfileOpen(true)}
      />

      <CartModal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
      />
      <OrdersModal
        open={ordersOpen}
        onClose={() => setOrdersOpen(false)}
      />
      <ProfileModal
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
      <ProductDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        product={selectedProduct}
        cart={cart}
        setCart={setCart}
      />
    </main>
  );
}
