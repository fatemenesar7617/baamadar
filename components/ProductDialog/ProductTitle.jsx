export default function ProductTitle({
  product,
}) {

  return (
    <h1
      className="
      mt-7
      text-right
      font-peyda
      text-[18px]
      font-medium
      leading-8
      text-[#555555]
      "
    >
      {product?.title}
    </h1>
  );
}