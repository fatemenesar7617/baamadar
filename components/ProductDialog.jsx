"use client";

import ProductSection3 from "./ProductDialog/ProductSection3";
import ProductBuyBox from "./ProductDialog/ProductBuyBox";

export default function ProductDialog({
  open,
  onClose,
  product,
}) {

  if (!open || !product) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        justify-center
        items-start
        pt-[115px]
      "
    >

      <div
        className="
          relative
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
            shadow
          "
        >
          ×
        </button>


        <div className="
          h-full
          overflow-hidden
        ">
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
            bg-white
            z-50
            px-4
            pb-4
          "
        >
          <ProductBuyBox
            product={product}
          />
        </div>

      </div>

    </div>
  );
}