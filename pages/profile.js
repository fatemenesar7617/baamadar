import { useEffect } from "react";
import { useRouter } from "next/router";

const menuItems = [
  { icon: "/icons/user.svg", label: "اطلاعات حساب کاربری" },
  { icon: "/icons/receipt.svg", label: "سابقه سفارش‌ها" },
  { icon: "/icons/card.svg", label: "حامی کارت من" },
  { icon: "/icons/menu-home.svg", label: "آدرس‌های من" },
];

export default function ProfilePage() {
  const router = useRouter();



  return (
    <main className="max-w-[390px] mx-auto min-h-screen bg-white flex flex-col pb-20">
      {/* هدر */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
        <button
          onClick={() => router.back()}
          className="text-gray-500 text-2xl"
        >
          ×
        </button>
        <p className="font-peyda font-semibold text-base text-[#2F2F2F]">
          پروفایل
        </p>
        <div className="w-8" />
      </div>

      {/* اطلاعات کاربر */}
      <div className="px-4 pt-6 pb-4 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#E86B42]/10 flex items-center justify-center mb-3">
          <img
            src="/icons/user.svg"
            alt="user"
            className="w-10 h-10 text-[#E86B42] opacity-60"
          />
        </div>
        <p className="font-peyda font-semibold text-base text-[#2F2F2F]">
          کاربر عزیز
        </p>
        <p className="font-peyda text-sm text-gray-400 mt-1">
          ۰۹۱۲***۵۶۷۸
        </p>
      </div>

      {/* منو */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5 opacity-50" />
            <span className="font-peyda text-sm text-[#2F2F2F]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* دکمه خروج */}
      <div className="px-4 pb-6">
        <button className="w-full h-12 border border-gray-200 text-gray-500 rounded-2xl font-peyda font-semibold text-sm hover:bg-gray-50 transition-colors">
          خروج از حساب کاربری
        </button>
      </div>
    </main>
  );
}
