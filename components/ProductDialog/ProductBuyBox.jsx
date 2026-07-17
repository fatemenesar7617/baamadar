export default function ProductBuyBox({
  product,
}) {

  return (
    <div className="mt-6 w-full">

      {/* قیمت با حامی کارت */}
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



      {/* قیمت کالا و دکمه خرید */}
      <div className="
        mt-4
        flex
        justify-around
        items-center
        w-full
      ">


        <button
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



        <div className="
          w-[115px]
          text-left
        ">

          <p className="
            font-peyda
            text-xs
            text-gray-500
          ">
            قیمت کالا
          </p>


          <p className="
            mt-2
            font-peyda
            text-sm
            font-bold
            text-[#E86B42]
          ">

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