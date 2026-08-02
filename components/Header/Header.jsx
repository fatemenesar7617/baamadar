import { useRouter } from "next/router";
import { useCart } from "@/components/CartContext";

export default function Header({ onCartClick }) {
  const router = useRouter();
  const { cartCount } = useCart();

  return (
    <header className="w-full max-w-[375px] mx-auto h-[72px] flex justify-between items-center px-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center gap-1 cursor-pointer"
      >
        <img
          src="/logos/direction-left 01.svg"
          alt="direction"
          className="w-5 h-5 cursor-pointer"
        />

        <img
          src="/logos/madarlogo.svg"
          alt="logo"
          className="w-24 h-auto cursor-pointer"
        />
      </div>

      {/* Cart */}
      <div
        onClick={onCartClick}
        className="relative cursor-pointer flex items-center gap-1"
      >
        <img
          src="/logos/sabad.svg"
          alt="cart"
          className="w-12 h-auto cursor-pointer"
        />

        {cartCount > 0 && (
          <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#E86B42] text-white text-xs rounded-full flex items-center justify-center font-peyda font-bold cursor-pointer animate-bounce">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
}