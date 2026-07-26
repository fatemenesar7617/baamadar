"use client";

import { useRouter } from "next/router";
import CategoryPhoneOne from "@/components/phone-one/CategoryPhoneOne";
import products from "@/data/products";

export default function Page2() {
  const router = useRouter();
  const { q, cat, discount } = router.query;

  return (
    <main className="max-w-[375px] mx-auto min-h-screen bg-white pb-20">
      <div className="flex justify-center gap-10">
        <CategoryPhoneOne 
          initialSearchQuery={q || ""}
          initialCategory={cat || null}
          initialDiscount={discount === "1"}
          products={products}
        />
      </div>
    </main>
  );
}
