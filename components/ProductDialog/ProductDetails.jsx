export default function ProductDetails({
  product,
}) {

  return (
    <div className="mt-5 grid grid-cols-2 gap-3">

      {product?.details?.map((item, index) => (

        <div
          key={index}
          className="
            px-4
            py-4
            text-right
          "
        >

          <p className="font-peyda text-xs text-gray-400">
            {item.title}
          </p>

          <p className="mt-3 font-peyda text-sm text-gray-600">
            {item.value}
          </p>

        </div>

      ))}

    </div>
  );
}