"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActiveLine from "./ActiveLine";

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

  const currentPath = router.pathname;

  const isActive = (path) => currentPath === path;

  const handleCartClick = () => router.push("/cart");
  const handleOrdersClick = () => router.push("/orders");
  const handleProfileClick = () => router.push("/profile");

  return (
    <footer
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full z-[70] transition-transform duration-200 ${
        hidden ? "translate-y-full -translate-x-1/2" : ""
      }`}
    >
      <div className="mx-auto max-w-[375px] bg-white border-t border-gray-100 h-16 flex items-center justify-around px-4">

        {/* خانه */}
        <button
          onClick={() => router.push("/")}
          className={`cursor-pointer relative flex-1 h-full flex flex-col items-center justify-center ${
            isActive("/") ? "text-[#E86B42]" : "text-gray-700"
          }`}
        >
          {isActive("/") && <ActiveLine />}

          <img
            src="/icons/menu-home.svg"
            alt="خانه"
            className={`w-5 h-5 transition-all duration-200 ${
              isActive("/") ? "opacity-100" : "opacity-80"
            }`}
          />

          <span className="mt-1 text-xs font-peyda font-semibold">
            خانه
          </span>
        </button>

        {/* سبد خرید */}
        <button
          onClick={handleCartClick}
          className={`cursor-pointer relative flex-1 h-full flex flex-col items-center justify-center ${
            isActive("/cart") ? "text-[#E86B42]" : "text-gray-700"
          }`}
        >
          {isActive("/cart") && <ActiveLine />}

          <img
            src="/icons/shopping basket 02.svg"
            alt="سبد خرید"
            className={`w-5 h-5 transition-all duration-200 ${
              isActive("/cart") ? "opacity-100" : "opacity-80"
            }`}
          />

          <span className="mt-1 text-xs font-peyda font-semibold">
            سبد خرید
          </span>
        </button>

        {/* سفارش‌ها */}
        <button
          onClick={handleOrdersClick}
          className={`cursor-pointer relative flex-1 h-full flex flex-col items-center justify-center ${
            isActive("/orders") ? "text-[#E86B42]" : "text-gray-700"
          }`}
        >
          {isActive("/orders") && <ActiveLine />}

          <img
            src="/icons/receipt.svg"
            alt="سفارش‌ها"
            className={`w-5 h-5 transition-all duration-200 ${
              isActive("/orders") ? "opacity-100" : "opacity-80"
            }`}
          />

          <span className="mt-1 text-xs font-peyda font-semibold">
            سفارش‌ها
          </span>
        </button>

        {/* پروفایل */}
        <button
          onClick={handleProfileClick}
          className={`cursor-pointer relative flex-1 h-full flex flex-col items-center justify-center ${
            isActive("/profile") ? "text-[#E86B42]" : "text-gray-700"
          }`}
        >
          {isActive("/profile") && <ActiveLine />}

          <img
            src="/icons/user.svg"
            alt="پروفایل"
            className={`w-5 h-5 transition-all duration-200 ${
              isActive("/profile") ? "opacity-100" : "opacity-80"
            }`}
          />

          <span className="mt-1 text-xs font-peyda font-semibold">
            پروفایل
          </span>
        </button>

      </div>
    </footer>
  );
}