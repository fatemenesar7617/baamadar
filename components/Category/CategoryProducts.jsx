import Image from "next/image";

export default function CategoryProducts({ category, onClose, cart, setCart }) {
  if (!category) return null;

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { id: product.id, quantity: 1 }]);
    }
  };

  const getQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item.quantity === 1) {
      setCart(cart.filter((i) => i.id !== id));
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[375px] rounded-t-3xl p-5 pb-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-peyda font-bold text-base text-gray-800">
            {category.title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-lg"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm"
            >
              <div className="w-full h-36 bg-gray-50 rounded-xl flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-contain"
                />
              </div>

              <h4 className="font-peyda text-sm font-medium mt-3 text-center min-h-[40px] flex items-center justify-center">
                {product.title}
              </h4>

              <div className="font-iranyekan text-center mt-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    {product.oldPrice} تومان
                  </span>
                  <span className="text-xs bg-red-500 text-white rounded px-1">
                    {product.discount}
                  </span>
                </div>
                <span className="font-peyda block text-sm font-bold mt-1">
                  {product.newPrice} تومان
                </span>
              </div>

              {getQuantity(product.id) === 0 ? (
                <button
                  onClick={() => addToCart(product)}
                  className="font-peyda w-full h-10 mt-4 rounded-full bg-[#E86B42] text-white text-sm font-medium"
                >
                  افزودن به سبد
                </button>
              ) : (
                <div className="flex items-center justify-center gap-3 mt-4 h-10">
                  <button
                    onClick={() => increase(product.id)}
                    className="w-8 h-8 rounded-full bg-[#E86B42] text-white flex items-center justify-center text-lg font-bold"
                  >+</button>
                  <span className="font-peyda text-sm font-bold">{getQuantity(product.id)}</span>
                  <button
                    onClick={() => decrease(product.id)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-lg font-bold"
                  >-</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
