"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import CategoryPhoneOne from "@/components/phone-one/CategoryPhoneOne";
import productsPage2 from "@/data/productsPage2";
import Footer from "@/components/Footer/Footer";

export default function Page2() {
  const router = useRouter();
  const { q } = router.query;
  const [cartOpen, setCartOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <main className="max-w-[375px] mx-auto min-h-screen bg-white pb-20">
      <div className="flex justify-center gap-10">
        <CategoryPhoneOne 
          initialSearchQuery={q || ""}
          products={productsPage2}
        />
      </div>
      <Footer
        onCartClick={() => setCartOpen(true)}
        onOrdersClick={() => setOrdersOpen(true)}
        onProfileClick={() => setProfileOpen(true)}
      />
    </main>
  );
}
