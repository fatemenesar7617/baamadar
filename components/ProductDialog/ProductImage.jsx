import SliderDots from "./SliderDots";

export default function ProductImage({
  product,
}) {

  return (
    <div className="
      mt-4
      rounded-[24px]
      border
      border-[#EEEEEE]
      bg-white
      px-5
      py-5
    ">

      <img
        src={product?.image}
        alt={product?.title}
        className="
          block
          h-[240px]
          w-full
          object-contain
        "
      />

      <SliderDots/>

    </div>
  );
}