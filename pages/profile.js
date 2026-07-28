import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const menuItems = [
  { icon: "/icons/user.svg", label: "اطلاعات حساب کاربری" },
  { icon: "/icons/receipt.svg", label: "سابقه سفارش‌ها" },
  { icon: "/icons/card.svg", label: "حامی کارت من" },
  { icon: "/icons/menu-home.svg", label: "آدرس‌های من" },
];

export default function ProfilePage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    
    <main className="max-w-[390px] mx-auto min-h-screen bg-white flex flex-col pb-20">

      {/* هدر */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
        <button
          onClick={() => router.back()}
          className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-500 text-2xl hover:text-[#E86B42] transition-colors duration-200"
          aria-label="بستن"
        >
          ×
        </button>

        <p className="font-peyda font-semibold text-base text-[#2F2F2F]">
          پروفایل
        </p>

        <div className="w-10" />
      </div>

      {!isLoggedIn ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6">

          <div className="w-24 h-24 rounded-full bg-[#E86B42]/10 flex items-center justify-center mb-6">
            <img
              src="/icons/user.svg"
              alt="user"
              className="w-12 h-12 opacity-60"
            />
          </div>

          <h2 className="font-peyda text-lg font-bold text-[#2F2F2F] mb-2">
            وارد حساب کاربری نشده‌اید
          </h2>

          <p className="font-peyda text-sm text-gray-500 text-center leading-7 mb-8">
            برای مشاهده اطلاعات پروفایل، سفارش‌ها و آدرس‌ها ابتدا وارد حساب کاربری خود شوید.
          </p>

          <button
            onClick={handleLogin}
            className="cursor-pointer w-full max-w-[280px] h-12 bg-[#E86B42] text-white rounded-2xl font-peyda font-semibold hover:opacity-90 transition"
          >
            ورود به حساب کاربری
          </button>

        </div>
      ) : (
        <>
          {/* آیکون کاربر */}
          <div className="px-4 pt-8 pb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-[#E86B42]/10 flex items-center justify-center">
              <img
                src="/icons/user.svg"
                alt="user"
                className="w-10 h-10 opacity-60"
              />
            </div>
          </div>

          {/* منو */}
          <div className="flex-1 px-4 space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 opacity-50"
                />

                <span className="font-peyda text-sm text-[#2F2F2F]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* خروج */}
          <div className="px-4 pb-6">
            <button
              onClick={handleLogout}
              className="cursor-pointer w-full h-12 border border-gray-200 text-gray-500 rounded-2xl font-peyda font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              خروج از حساب کاربری
            </button>
          </div>
        </>
      )}
    </main>
  );
}