import { useCart } from "@/components/CartContext";

export default function ProductBuyBox({ product }) {
  const { cart, setCart, addToCart, increase, decrease, removeFromCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="mt-6 w-full">
      {product?.hasSupport && (
        <div className="
          rounded-2xl
          bg-gradient-to-l
          from-purple-700
          via-cyan-400
          to-lime-400
          p-[2px]
        ">
          <div className="
            flex
            h-10
            items-center
            justify-between
            rounded-[14px]
            bg-white
            px-3
          ">
            <p className="
              font-peyda
              text-sm
              font-semibold
              text-purple-800
            ">
              قیمت با حامی کارت
            </p>
            <p className="
              font-peyda
              text-sm
              font-bold
              text-green-600
            ">
              {product.supportPrice}
              <span className="mr-1 text-xs">
                تومان
              </span>
            </p>
          </div>
        </div>
      )}

      <div className="
        mt-4
        flex
        justify-around
        items-center
        w-full
      ">
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="
              h-12
              w-[220px]
              rounded-2xl
              bg-[#E86B42]
              font-peyda
              text-sm
              text-center
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-[#d95a2f]
              active:scale-95
              shadow-lg
              shadow-[#E86B42]/30
            "
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="
            h-12
            w-[220px]
            rounded-2xl
            bg-[#E86B42]
            flex
            items-center
            justify-around
            text-white
          ">
            <button
              onClick={() => increase(product.id)}
              className="w-8 h-8 rounded-full bg-white text-[#E86B42] flex items-center justify-center text-lg font-bold hover:bg-orange-50 transition-colors"
            >
              +
            </button>
            <span className="font-peyda font-bold">{quantity}</span>
            <button
              onClick={() => {
                if (quantity === 1) {
                  removeFromCart(product.id);
                } else {
                  decrease(product.id);
                }
              }}
              className="w-8 h-8 rounded-full bg-white text-black border border-gray-200 flex items-center justify-center text-lg font-bold hover:bg-gray-50 transition-colors"
            >
              −
            </button>
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-8 h-8 rounded-full bg-white text-red-500 border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="w-[115px] text-left">
          <p className="font-peyda text-xs text-gray-500">قیمت کالا</p>
          <p className="mt-2 font-peyda text-sm font-bold text-[#E86B42]">
            {product.price}
            <span className="mr-1 text-xs">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}