"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import CategoryHeader from "./CategoryHeader";
import MainCategories from "./MainCategories";
import SubCategories from "./SubCategories";
import CategoryToolbar from "./CategoryToolbar";
import ProductList from "./ProductList";
import BottomNav from "./BottomNav";
import ProductDialog from "@/components/ProductDialog";
import CartModal from "./CartModal";
import OrdersModal from "./OrdersModal";
import ProfileModal from "./ProfileModal";
import InlineSearch from "./InlineSearch";

export default function CategoryPhoneOne({ initialSearchQuery = "", products }) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [activeFilter, setActiveFilter] = useState(null);
  const [sortOption, setSortOption] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "home") {
      router.push("/");
    } else if (tab === "cart") {
      setCartOpen(true);
    } else if (tab === "orders") {
      setOrdersOpen(true);
    } else if (tab === "profile") {
      setProfileOpen(true);
    }
  };

  return (

    <>

      <div className="
        relative
        w-[390px]
        bg-white
        overflow-visible
      ">

        <CategoryHeader
          cart={cart}
          onCartClick={() => setCartOpen(true)}
          onSearchClick={() => setSearchOpen(true)}
        />

        <InlineSearch
          open={searchOpen}
          onClose={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
          query={searchQuery}
          setQuery={setSearchQuery}
        />

        <MainCategories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectSubCategory={setSelectedSubCategory}
        />

        <SubCategories
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectSubCategory={setSelectedSubCategory}
        />

        <CategoryToolbar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        <ProductList
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          cart={cart}
          setCart={setCart}
          setSelectedProduct={setSelectedProduct}
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          sortOption={sortOption}
          products={products}
        />

        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      </div>


      <ProductDialog
  open={selectedProduct !== null}
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  cart={cart}
  setCart={setCart}
/>

      <CartModal
        open={cartOpen}
        onClose={() => {
          setCartOpen(false);
          setActiveTab("home");
        }}
        cart={cart}
        setCart={setCart}
      />

      <OrdersModal
        open={ordersOpen}
        onClose={() => {
          setOrdersOpen(false);
          setActiveTab("home");
        }}
      />

      <ProfileModal
        open={profileOpen}
        onClose={() => {
          setProfileOpen(false);
          setActiveTab("home");
        }}
      />

    </>
  );
}
