"use client";

import { useRouter } from "next/router";
import CategoryPhoneOne from "@/components/phone-one/CategoryPhoneOne";
import productsPage2 from "@/data/productsPage2"

export default function Page2() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex justify-center gap-10">
        <CategoryPhoneOne 
  initialSearchQuery={q || ""}
  products={productsPage2}
/>
      </div>
    </main>
  );
}
