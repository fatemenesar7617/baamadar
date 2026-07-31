import { useState } from "react";
import { useCart } from "@/components/CartContext";

export default function ProductItem({
  product,
  image,
  title,
  price,
  oldPrice,
  discount,
  hasSupport,
  supportPrice,
  cart: cartProp,
  setCart: setCartProp,
  onProductClick,
}) {
  const cartCtx = useCart();
  const cart = cartProp ?? cartCtx.cart;
  const setCart = setCartProp ?? cartCtx.setCart;
  const [added, setAdded] = useState(false);

  const cartItem = cart.find(
    (item) => item.id === product.id
  );

  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { id: product.id, quantity: 1 }]);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const increase = () => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = () => {
    if (quantity === 1) {
      removeFromCart();
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeFromCart = () => {
    setCart(
      cart.filter(
        (item) => item.id !== product.id
      )
    );
  };

  return (

    <div
      onClick={onProductClick}
      className="
        bg-white
        rounded-2xl
        border
        border-[#F3F3F3]
        p-4
        mb-3
        cursor-pointer
        transition-shadow
        hover:shadow-md
      "
    >


      <div className="flex gap-4">


        <div className="w-24 h-24 flex-shrink-0">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />

        </div>



        <div className="flex-1 text-right">


          <h3 className="font-peyda text-sm text-[#2F2F2F] leading-7">
            {title}
          </h3>


          <p className="font-peyda text-xs text-gray-500 mt-1 leading-6">
            دوشه هزار روغن زیتون بکر کریستال
          </p>



            <div className="mt-3">


              {discount ? (
                <div className="flex items-center gap-2">

                  <span className="text-xs text-gray-400 line-through font-peyda">
                    {oldPrice}
                  </span>


                  <span className="bg-[#D81E34] text-white text-[10px] rounded-full px-2 py-[2px] font-peyda">
                    {discount}
                  </span>

                </div>
              ) : null}



              <div className="mt-1 flex items-end gap-1">

                <span className="text-lg font-bold text-[#E86B42] font-peyda">
                  {price}
                </span>


              <span className="text-xs text-orange-500 font-peyda mb-1">
                تومان
              </span>


            </div>


          </div>



          <div className="flex justify-end mt-3">


          {quantity > 0 ? (

            <div className="
              flex
              items-center
              gap-4
              border
              border-[#F1F1F1]
              rounded-full
              px-3
              py-2
            ">


              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increase();
                }}
                className="w-8 h-8 rounded-full text-[#E86B42] flex items-center justify-center hover:bg-[#fde8e0] transition-colors cursor-pointer"
              >

                <img
                  src="/icons/plus.svg"
                  alt="plus"
                  className="w-5 h-5"
                />

              </button>



              <span className="font-peyda text-sm">
                {quantity}
              </span>



              {quantity > 1 && (

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    decrease();
                  }}
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                >

                  <img
                    src="/icons/minus.svg"
                    alt="minus"
                    className="w-5 h-5"
                  />

                </button>

              )}



              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart();
                }}
                className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
              >

                <img
                  src="/icons/trash.svg"
                  alt="trash"
                  className="w-5 h-5"
                />

              </button>


            </div>


          ) : (


            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              className={`
                rounded-full
                px-5
                py-2
                text-sm
                font-peyda
                transition-all
                duration-300
                cursor-pointer
                ${added
                  ? "bg-green-500 text-white scale-105 shadow-lg shadow-green-500/40"
                  : "bg-[#FFF1EB] text-[#E86B42] hover:bg-[#fde8e0] active:scale-95 shadow-sm"
                }
              `}
            >
              {added ? "✓ افزوده شد" : "افزودن به سبد"}
            </button>


          )}


          </div>


        </div>


      </div>




      {hasSupport && (

        <div
          className="
            mt-4
            -mx-4
            -mb-4
            
            px-4
            py-3
            flex
            justify-between
            items-center
          "
        >


          <span className="font-peyda font-semibold text-xs text-[#E86B42]">
            قیمت با حامی کارت
          </span>


          <span className="font-peyda text-sm font-bold text-[#E86B42]">
            {supportPrice} تومان
          </span>


        </div>

      )}


    </div>

  );
}