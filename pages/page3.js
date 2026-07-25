"use client";

import { useRouter } from "next/router";
import Header3 from "@/components/ProductPage3/Header3";
import ProductSection3 from "@/components/ProductPage3/ProductSection3";
import productsPage2 from "@/data/productsPage2";

export default function Page3() {
  const router = useRouter();
  const { id } = router.query;
  const product = productsPage2.find(p => p.id === id) || productsPage2[0];

  return (
  <main className="min-h-screen bg-white py-8">
<div className="w-[390px] mx-auto min-h-screen bg-gray-300 mt-4 mb-2">
        <Header3/>
        <ProductSection3 product={product}/>
    </div>
    </main>
  );
}