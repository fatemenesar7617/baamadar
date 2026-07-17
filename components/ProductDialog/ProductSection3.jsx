
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductDetails from "./ProductDetails";
import ProductBuyBox from "./ProductBuyBox";


export default function ProductSection3({
  product,
  onClose,
}) {

  return (

    <section
      className="
        relative
        mt-4
        min-h-[calc(100vh-80px)]
        rounded-t-[28px]
        bg-white
        px-4
        pb-10
        pt-4
        shadow-[0_-2px_12px_rgba(0,0,0,0.10)]
      "
    >



      <ProductImage
        product={product}
      />


      <ProductTitle
        product={product}
      />


      <ProductDetails
        product={product}
      />


      <ProductBuyBox
        product={product}
      />


    </section>

  );
}