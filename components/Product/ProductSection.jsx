export default function ProductSection() {
  const products = [
  {
    id: 1,
    title: "روغن زیتون بکر کریستال\n5لیتر",
    image: "/images/roghan.svg",
    oldPrice: "40,000",
    newPrice: "37,000",
    discount: "10٪",
  },
  {
    id: 2,
    title: "برنج ایرانی",
    image: "/images/bereng.png",
    oldPrice: "500,000",
    newPrice: "450,000",
    discount: "10٪",
  },
  {
    id: 3,
    title: "کشک قره قروتی ممتاز\nحس خوب-500گرم",
    image: "/images/kashk.svg",
    oldPrice: "40,000",
    newPrice: "37,000",
    discount: "10٪",
  },
  {
    id: 4,
    title: "شکر سفید",
    image: "/images/shekar.png",
    oldPrice: "500,000",
    newPrice: "450,000",
    discount: "10٪",
  },
];
  return(

    <section className="px-4 mt-8">

      <div className="flex justify-between items-center mb-4">
        <h2 className=" font-peyda font-bold text-sm  text-amber-700">
          محصولات ویژه
        </h2>

        <span className=" font-peyda text-xs text-amber-700">
          بهترین پیشنهادات روز
        </span>
      </div>

<div className="grid grid-cols-2 gap-3">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm"
    >
      {/* عکس محصول */}
      <div className="w-full h-36 bg-gray-50 rounded-xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* اسم محصول */}
      <h3 className=" font-peyda text-sm font-medium mt-3 text-center">
        {product.title}
      </h3>

      {/* قیمت */}
      <div className="font-iranyekan text-center mt-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-gray-400 line-through">
            {product.oldPrice} تومان
          </span>

          <span className="text-xs bg-red-500 text-white rounded px-1">
            {product.discount}
          </span>
        </div>

        <span className="font-peyda block text-sm font-bold mt-1">
          {product.newPrice} تومان
        </span>
      </div>

      {/* دکمه */}
      <button className="font-peyda w-full h-10 mt-4 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
        افزودن به سبد
      </button>
    </div>
  ))}
</div>
    </section>
  );
}