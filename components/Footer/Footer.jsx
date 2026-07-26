"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    const show = () => setHidden(false);
    window.addEventListener("modal:open", hide);
    window.addEventListener("modal:close", show);
    return () => {
      window.removeEventListener("modal:open", hide);
      window.removeEventListener("modal:close", show);
    };
  }, []);

  const handleCartClick = () => router.push("/cart");
  const handleOrdersClick = () => router.push("/orders");
  const handleProfileClick = () => router.push("/profile");

  return (
    <footer
      className={`px-4 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full z-[70] transition-transform duration-200 ${
        hidden ? "translate-y-full -translate-x-1/2" : ""
      }`}
    >
      <div className="bg-white border-t border-gray-100 h-16 flex items-center justify-around">

        {/* خانه */}
        <div
          onClick={() => router.push("/")}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/menu-home.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">خانه</span>
        </div>

        {/* سبد خرید */}
        <div
          onClick={handleCartClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/shopping basket 02.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">سبد خرید</span>
        </div>

        {/* سفارش ها */}
        <div
          onClick={handleOrdersClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/receipt.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">سفارش‌ها</span>
        </div>

        {/* پروفایل */}
        <div
          onClick={handleProfileClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/user.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">پروفایل</span>
        </div>

      </div>
    </footer>
  );
}
