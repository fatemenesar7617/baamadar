import ProductItem from "./ProductItem";
import allProducts from "@/data/products";

export default function ProductList({
  selectedCategory,
  selectedSubCategory,
  cart,
  setCart,
  setSelectedProduct,
  searchQuery = "",
  activeFilter,
  sortOption,
  products,
}) {

  const sourceProducts = products || allProducts;

  const filteredProducts = sourceProducts.filter((product) => {

    const categoryMatch =
      selectedCategory === null ||
      product.categoryId === selectedCategory;


    const subCategoryMatch =
      selectedSubCategory === null ||
      product.subCategoryId === selectedSubCategory;

    const searchMatch =
      !searchQuery.trim() ||
      product.title.includes(searchQuery.trim());

    const supportMatch =
      activeFilter !== "support" ||
      product.hasSupport === true;

    const discountMatch =
      activeFilter !== "discount" ||
      (product.discount && product.discount !== "");

    return categoryMatch && subCategoryMatch && searchMatch && supportMatch && discountMatch;

  });

  const parsePrice = (priceStr) => Number(priceStr.replace(/,/g, ""));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "cheapest":
        return parsePrice(a.price) - parsePrice(b.price);
      case "mostExpensive":
        return parsePrice(b.price) - parsePrice(a.price);
      case "highestDiscount":
        return parseInt(b.discount) - parseInt(a.discount);
      case "newest":
        return b.id - a.id;
      case "support":
        return (b.hasSupport ? 1 : 0) - (a.hasSupport ? 1 : 0);
      case "bestselling":
      default:
        return 0;
    }
  });



  return (

    <div className="pb-20">


      {sortedProducts.map((product) => (

        <ProductItem

          key={product.id}

          product={product}

          image={product.image}

          title={product.title}

          price={product.price}

          oldPrice={product.oldPrice}

          discount={product.discount}

          hasSupport={product.hasSupport}

          supportPrice={product.supportPrice}

          cart={cart}

          setCart={setCart}


          // باز کردن صفحه جزئیات محصول
          onProductClick={() =>
            setSelectedProduct(product)
          }


        />

      ))}


    </div>

  );
}