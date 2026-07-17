import ProductItem from "./ProductItem";


const products = [
  {
    id: 1,
    image: "/images/panir.svg",
    title: "پنیر فتا صباح",
    price: "898,000",
    oldPrice: "948,000",
    discount: "50%",
    categoryId: "labaniyat",
    subCategoryId: "panir",
    hasSupport: true,
    supportPrice: "4.000.000",
  },

  {
    id: 2,
    image: "/images/doogh.png",
    title: "دوغ محلی",
    price: "898,000",
    oldPrice: "948,000",
    discount: "50%",
    categoryId: "labaniyat",
    subCategoryId: "doogh",
    hasSupport: false,
    supportPrice: "3,000,000",
  },

  {
    id: 3,
    image: "/images/roghan.svg",
    title: "روغن زیتون بکر کریستال",
    price: "898,000",
    oldPrice: "948,000",
    discount: "50%",
    categoryId: "asasi",
    subCategoryId: "roghan",
    hasSupport: true,
    supportPrice: "30.000.000",
  },

  {
    id: 4,
    image: "/images/shekar.png",
    title: "شکر سفید",
    price: "898,000",
    oldPrice: "948,000",
    discount: "50%",
    categoryId: "asasi",
    subCategoryId: "shakar",
    hasSupport: true,
    supportPrice: "1,000,000",
  },

];


export default function ProductList({
  selectedCategory,
  selectedSubCategory,
  cart,
  setCart,
  setSelectedProduct,
}) {


  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      selectedCategory === null ||
      product.categoryId === selectedCategory;


    const subCategoryMatch =
      selectedSubCategory === null ||
      product.subCategoryId === selectedSubCategory;


    return categoryMatch && subCategoryMatch;

  });



  return (

    <div className="pb-20">


      {filteredProducts.map((product) => (

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