"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryHeader from "./CategoryHeader";
import MainCategories from "./MainCategories";
import CategoryToolbar from "./CategoryToolbar";
import ProductList from "./ProductList";
import ProductDialog from "@/components/ProductDialog";
import InlineSearch from "./InlineSearch";
import { useCart } from "@/components/CartContext";

export default function CategoryPhoneOne({ initialSearchQuery = "", initialCategory = null, initialDiscount = false, products }) {
  const router = useRouter();
  const { cart, setCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [activeFilter, setActiveFilter] = useState(initialDiscount ? "discount" : null);
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    if (router.query.cat) {
      setSelectedCategory(router.query.cat);
    }
  }, [router.query.cat]);

  useEffect(() => {
    const productOpen = selectedProduct !== null;
    if (productOpen) {
      window.dispatchEvent(new CustomEvent("modal:open", { detail: { open: true } }));
    } else {
      window.dispatchEvent(new CustomEvent("modal:close"));
    }
  }, [selectedProduct]);

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
          onCartClick={() => router.push("/cart")}
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

      </div>


      <ProductDialog
  open={selectedProduct !== null}
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  cart={cart}
  setCart={setCart}
/>

    </>
  );
}
