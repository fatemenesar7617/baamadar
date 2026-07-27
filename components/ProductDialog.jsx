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
        justify-center
        items-start
        pt-[45vh]
      "
    >
      {/* بک‌دراپ */}
      <div
        className="absolute inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* مودال */}
      <div
        className="
          relative
          z-[60]
          w-[390px]
          h-[55vh]
          bg-white
          rounded-t-[28px]
          shadow-xl
          overflow-hidden
        "
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-[100]
            w-10
            h-10
            rounded-full
            bg-white
            text-gray-700
            text-3xl
          "
        >
          ×
        </button>

        {/* محتوای محصول */}
        <div
          className="
            h-full
            overflow-y-auto
            no-scrollbar
            pb-[160px]
          "
        >
          <ProductSection3 product={product} />
        </div>

        {/* باکس خرید */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[150px]
            bg-white
            z-[80]
            px-4
            pb-4
            border-t
            flex
            items-center
            border-gray-100
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