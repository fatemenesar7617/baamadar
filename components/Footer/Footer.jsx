import ActiveLine from "./ActiveLine";
export default function Footer() {
  return(
    <footer className="px-4 mt-6 mb-4">

      <div className=" bg-white border-t border-gray-100 h-16 flex items-center justify-around">

        {/* خانه */}
        <div className="flex flex-col items-center">
          <img
            src="/icons/menu-home.svg"
            className="w-5 h-5"
          />
          <span className="text-xs mt-1 font-peyda">
            خانه
          </span>
        </div>


        {/* سبد خرید */}
        <div className="flex flex-col items-center">
          <img
            src="/icons/shopping basket 02.svg"
            className="w-5 h-5"
          />
          <span className="text-xs mt-1 font-peyda">
            سبد خرید
          </span>
        </div>


        {/* سفارش ها */}
        <div className="flex flex-col items-center">
          <img
            src="/icons/receipt.svg"
            className="w-5 h-5"
          />
          <span className="text-xs mt-1 font-peyda">
            سفارش‌ها
          </span>
        </div>


        {/* پروفایل */}
        <div className="flex flex-col items-center">
          <img
            src="/icons/user.svg"
            className="w-5 h-5"
          />
          <span className="text-xs mt-1 font-peyda">
            پروفایل
          </span>
        </div>

      </div>

    </footer>
  );
}