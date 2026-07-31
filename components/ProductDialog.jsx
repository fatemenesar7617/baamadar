"use client";

import ProductSection3 from "./ProductDialog/ProductSection3";
import ProductBuyBox from "./ProductDialog/ProductBuyBox";
import { useCart } from "@/components/CartContext";

export default function ProductDialog({
  open,
  onClose,
  product,
  cart: cartProp,
  setCart: setCartProp,
}) {
  const cartCtx = useCart();
  const cart = cartProp ?? cartCtx.cart;
  const setCart = setCartProp ?? cartCtx.setCart;

  if (!open || !product) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[60]
        flex
        flex-col
        justify-end
      "
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative
          z-[60]
          w-full
          max-w-[390px]
          mx-auto
          bg-white
          rounded-t-[32px]
          shadow-2xl
          flex
          flex-col
          overflow-hidden
        
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            z-50
            flex
            h-9
            w-9
            items-center
            justify-center
            text-2xl
            font-bold
            text-gray-800
            hover:text-black
            transition-colors
            cursor-pointer
          "
        >
          ×
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-[140px]">
          <ProductSection3 product={product} />
        </div>

        {/* Buy Box - Fixed at bottom */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            bg-white
            border-t
            border-gray-100
            px-4
            pt-3
            pb-5
            z-10
          "
        >
          <ProductBuyBox
            product={product}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
}