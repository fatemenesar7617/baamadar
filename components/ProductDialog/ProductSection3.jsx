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
        px-4
        pt-4
        pb-32
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