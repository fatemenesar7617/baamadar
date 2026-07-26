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
        pt-[115px]
      "
    >
      <div className="absolute inset-0 z-40 bg-black/40" onClick={onClose} />

      <div
        className="
          relative
          z-[60]
          w-[390px]
          h-[calc(100vh-115px)]
          bg-white
          rounded-t-[28px]
          shadow-xl
          overflow-hidden
        "
      >

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


        <div
          className="
            h-full
            overflow-hidden
            pb-[140px]
          "
        >

          <ProductSection3
            product={product}
          />

        </div>


        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[170px]
            bg-white
            z-[80]
            px-4
            pb-[80px]
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
