import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductDetails from "./ProductDetails";

export default function ProductSection3({
  product,
}) {

  return (
    <section
      className="
        relative
        bg-white
        px-3
        pt-6
        pb-4
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

    </section>
  );
}