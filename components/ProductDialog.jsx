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
        items-end
        justify-center
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
          bg-white
          rounded-t-[32px]
          shadow-2xl
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-3xl
            text-gray-700
          "
        >
          ×
        </button>

        {/* Content */}
        <div className="pb-[135px]">
          <ProductSection3 product={product} />
        </div>

        {/* Buy Box */}
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
            rounded-t-[24px]
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