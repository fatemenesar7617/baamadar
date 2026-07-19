export default function Footer({ onCartClick, onOrdersClick, onProfileClick }) {
  return (
    <footer className="px-4 mt-6 mb-4">
      <div className="bg-white border-t border-gray-100 h-16 flex items-center justify-around">

        {/* خانه */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/menu-home.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">خانه</span>
        </div>

        {/* سبد خرید */}
        <div
          onClick={onCartClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/shopping basket 02.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">سبد خرید</span>
        </div>

        {/* سفارش ها */}
        <div
          onClick={onOrdersClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/receipt.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">سفارش‌ها</span>
        </div>

        {/* پروفایل */}
        <div
          onClick={onProfileClick}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/icons/user.svg" className="w-5 h-5" />
          <span className="text-xs mt-1 font-peyda">پروفایل</span>
        </div>

      </div>
    </footer>
  );
}
