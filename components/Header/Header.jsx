import { useRouter } from "next/router";
import Link from "next/link";

export default function Header({ onCartClick, cartCount = 0 }) {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white shadow">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logos/direction-left 01.svg" alt="direction" className="w-5 h-5"/>
        <img src="/logos/madarlogo.svg" alt="logo" className="w-24 h-auto"/>
      </div>
      <div className="flex items-center gap-4">
      <Link href="/login">
  <button className="text-xs border border-gray-500 text-[#E86B42] rounded-xl px-2 py-1">
       ورود به سایت
  </button>
</Link>
      <div
        onClick={onCartClick}
        className="relative cursor-pointer"
      >
        <img src="/logos/sabad.svg" alt="cart" className="w-12 h-auto"/>
        {cartCount > 0 && (
          <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#E86B42] text-white text-xs rounded-full flex items-center justify-center font-peyda font-bold">
            {cartCount}
          </span>
          
        )}
        </div>
      </div>
    </header>
  );
}
