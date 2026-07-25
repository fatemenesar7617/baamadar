export default function ProductBuyBox({
  product,
  cart = [],
  setCart,
}) {
  const currentCart = cart || [];

const cartItem = currentCart.find(
  (item) => item.id === product.id
);

const quantity = cartItem?.quantity || 0;

  return (
    <div className="mt-6 w-full">

      {/* قیمت با حامی کارت */}
      {product?.hasSupport && (

        <div
          className="
          rounded-2xl
          bg-gradient-to-l
          from-purple-700
          via-cyan-400
          to-lime-400
          p-[2px]
          "
        >

          <div
            className="
            flex
            h-10
            items-center
            justify-between
            rounded-[14px]
            bg-white
            px-3
            "
          >

            <p
              className="
              font-peyda
              text-sm
              font-semibold
              text-purple-800
              "
            >
              قیمت با حامی کارت
            </p>


            <p
              className="
              font-peyda
              text-sm
              font-bold
              text-green-600
              "
            >
              {product.supportPrice}

              <span className="mr-1 text-xs">
                تومان
              </span>

            </p>

          </div>

        </div>

      )}



      {/* قیمت کالا و دکمه خرید */}
      <div
        className="
        mt-4
        flex
        justify-around
        items-center
        w-full
        "
      >


        {quantity === 0 ? (

<button
  onClick={() => {
    setCart([
      ...currentCart,
      {
        id: product.id,
        quantity: 1,
      },
    ]);
  }}

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
  "
>
افزودن به سبد خرید
</button>


) : (

<div
  className="
  h-12
  w-[220px]
  rounded-2xl
  bg-[#E86B42]
  flex
  items-center
  justify-around
  text-white
  "
>

<button
onClick={() => {
setCart(
 currentCart.map(item =>
 item.id === product.id
 ? {...item, quantity:item.quantity + 1}
 : item
 )
)
}}
>
+
</button>


<span className="font-peyda font-bold">
{quantity}
</span>


<button
onClick={() => {

if(quantity === 1){

setCart(
 currentCart.filter(
 item => item.id !== product.id
 )
)

}else{

setCart(
 currentCart.map(item =>
 item.id === product.id
 ? {...item, quantity:item.quantity - 1}
 : item
 )
)

}

}}
>
−
</button>


<button
onClick={() => {
setCart(
 currentCart.filter(
 item => item.id !== product.id
 )
)
}}
>
<img
src="/icons/trash.svg"
className=" bg-white rounded w-6 h-6"
alt="remove"
/>
</button>


</div>

)}
        <div
          className="
          w-[115px]
          text-left
          "
        >

          <p
            className="
            font-peyda
            text-xs
            text-gray-500
            "
          >
            قیمت کالا
          </p>


          <p
            className="
            mt-2
            font-peyda
            text-sm
            font-bold
            text-[#E86B42]
            "
          >

            {product.price}

            <span className="mr-1 text-xs">
              تومان
            </span>

          </p>


        </div>


      </div>


    </div>
  );
}