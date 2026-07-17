export default function ProductDetails({
  product,
}) {

  return (
    <div className="mt-5 grid grid-cols-2 gap-3">


      <div className="rounded-2xl bg-gray-50 px-4 py-4 text-right">

        <p className="font-peyda text-xs text-gray-400">
          نوع بسته‌بندی :
        </p>

        <p className="mt-3 font-peyda text-sm text-gray-600">
          {product?.packageType || "پلی اتیلن"}
        </p>

      </div>



      <div className="rounded-2xl bg-gray-50 px-4 py-4 text-right">

        <p className="font-peyda text-xs text-gray-400">
          مواد تشکیل‌دهنده :
        </p>

        <p className="mt-3 font-peyda text-sm text-gray-600">
          {product?.ingredients || "شیر گاوی"}
        </p>

      </div>



      <div className="rounded-2xl bg-gray-50 px-4 py-4 text-right">

        <p className="font-peyda text-xs text-gray-400">
          وزن محصول :
        </p>

        <p className="mt-3 font-peyda text-sm text-gray-600">
          {product?.weight || "۳۰۰ گرم"}
        </p>

      </div>



      <div className="rounded-2xl bg-gray-50 px-4 py-4 text-right">

        <p className="font-peyda text-xs text-gray-400">
          برند :
        </p>

        <p className="mt-3 font-peyda text-sm text-gray-600">
          {product?.brand || "هراز"}
        </p>

      </div>


    </div>
  );
}