

export default function ProductImage({
  product,
}) {

  return (
    <div className="
      mt-4
      rounded-[16px]
      border
      border-[#EEEEEE]
      bg-white
      px-3
      py-3
    ">

      <img
        src={product?.image}
        alt={product?.title}
        className="
          block
          h-[100px]
          w-full
          object-contain
        "
      />
      
      
    </div>
  );
}