import { useCart } from "@/components/CartContext";

export default function BottomNav({ activeTab, onTabChange }) {
  const cartCtx = useCart();
  const cartCount = cartCtx.cartCount;

  const items = [
    {
      id: "home",
      title: "خانه",
      icon: "/icons/menu-home.svg",
    },
    {
      id: "cart",
      title: "سبد خرید",
      icon: "/icons/shopping basket 02.svg",
    },
    {
      id: "orders",
      title: "سفارش‌ها",
      icon: "/icons/receipt.svg",
    },
    {
      id: "profile",
      title: "پروفایل",
      icon: "/icons/user.svg",
    },
  ];

  return (
    <div className="
      absolute
      bottom-0
      left-0
      right-0
      h-[72px]
      bg-white
      border-t
      border-gray-100
      flex
      items-center
      justify-around
      z-50
    ">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`
            flex
            flex-col
            items-center
            gap-1
            cursor-pointer
            relative
            ${
              activeTab === item.id
              ? "text-[#E86B42]"
              : "text-gray-400"
            }
          `}
        >
          <img
            src={item.icon}
            alt={item.title}
            className={`
              w-6
              h-6
              object-contain
              ${
                activeTab === item.id
                ? "opacity-100"
                : "opacity-60"
              }
            `}
          />

          {item.id === "cart" && (
            <div className="relative">
              <span className="text-xs font-peyda">
                {item.title}
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 w-4 h-4 bg-[#E86B42] text-white text-[9px] rounded-full flex items-center justify-center font-peyda font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
          )}

          {item.id !== "cart" && (
            <span className="text-xs font-peyda">
              {item.title}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
