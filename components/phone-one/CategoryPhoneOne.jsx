"use client";

import { useState } from "react";
import CategoryHeader from "./CategoryHeader";
import MainCategories from "./MainCategories";
import SubCategories from "./SubCategories";
import CategoryToolbar from "./CategoryToolbar";
import ProductList from "./ProductList";
import BottomNav from "./BottomNav";
import ProductDialog from "@/components/ProductDialog";

export default function CategoryPhoneOne() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (

    <>

      <div className="
        relative
        w-[390px]
        min-h-screen
        bg-white
        rounded-3xl
        shadow-lg
        overflow-visible
        border
        border-amber-500
      ">

        <CategoryHeader
          cart={cart}
        />

        <MainCategories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectSubCategory={setSelectedSubCategory}
        />

        <SubCategories
          selectedSubCategory={selectedSubCategory}
          onSelectSubCategory={setSelectedSubCategory}
        />

        <CategoryToolbar />

        <ProductList
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          cart={cart}
          setCart={setCart}
          setSelectedProduct={setSelectedProduct}
        />

        <BottomNav />

      </div>


      <ProductDialog
        open={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </>
  );
}