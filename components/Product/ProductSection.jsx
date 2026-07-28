import { useRef, useEffect } from "react";
import products from "@/data/products";

export default function ProductSection({
  cart,
  setCart,
  onProductClick,
  searchQuery = " ",
  title = "محصولات ویژه",
  subtitle = "بهترین پیشنهادات روز",
  discountedOnly = false,
  onViewAll = null,
}) {
  let filteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.title.includes(searchQuery.trim()) ||
          product.price.includes(searchQuery.trim())
      )
    : products;

  if (discountedOnly) {
    filteredProducts = filteredProducts.filter(
      (product) => !!product.discount
    );
  }

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

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const scrollRef = useRef(null);

  const drag = useRef({
    active: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    moved: false,
    horizontal: false,
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const atLeft = el.scrollLeft <= 0;

      const atRight =
        Math.ceil(el.scrollLeft + el.clientWidth) >=
        el.scrollWidth;

      if (e.shiftKey) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
        return;
      }

      if (
        (e.deltaY > 0 && !atRight) ||
        (e.deltaY < 0 && !atLeft)
      ) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, {
      passive: false,
    });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;

    const el = scrollRef.current;

    drag.current.active = true;
    drag.current.moved = false;
    drag.current.horizontal = false;
    drag.current.startX = e.clientX;
    drag.current.startY = e.clientY;
    drag.current.scrollLeft = el.scrollLeft;
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;

    const el = scrollRef.current;

    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;

    if (!drag.current.horizontal) {
      if (Math.abs(dy) > Math.abs(dx)) {
        return;
      }

      if (Math.abs(dx) > 5) {
        drag.current.horizontal = true;
        drag.current.moved = true;
      }
    }

    if (drag.current.horizontal) {
      e.preventDefault();
      el.scrollLeft = drag.current.scrollLeft - dx;
    }
  };

  const endDrag = () => {
    drag.current.active = false;
    drag.current.horizontal = false;
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section className="px-4 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-peyda font-bold text-sm text-amber-700">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <span className="font-peyda text-xs text-amber-700">
            {subtitle}
          </span>

          {onViewAll ? (
            <button
              onClick={onViewAll}
              className="font-peyda text-xs text-[#E86B42] border border-[#E86B42] rounded-full px-2 py-0.5"
            >
              همه
            </button>
          ) : null}

        </div>
      </div>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="flex gap-3 overflow-x-auto no-scrollbar pb-2 cursor-grab active:cursor-grabbing select-none"
      >
        {filteredProducts.map((product) => {
          const qty = getQuantity(product.id);

          return (
                        <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm w-40 flex-shrink-0 flex flex-col"
            >
              <div
                className="w-full h-32 bg-gray-50 rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => onProductClick && onProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <h3 className="font-peyda text-sm font-medium mt-2 text-center min-h-[40px] flex items-center justify-center leading-6">
                {product.title}
              </h3>

              <div className="font-iranyekan text-center mt-2">
                {product.discount ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      {product.oldPrice} تومان
                    </span>

                    <span className="text-xs bg-red-500 text-white rounded px-1">
                      {product.discount}
                    </span>
                  </div>
                ) : null}

                <span className="font-peyda block text-sm font-bold mt-1">
                  {product.price} تومان
                </span>
              </div>

              {qty === 0 ? (
                <button
                  onClick={() => addToCart(product)}
                  className="font-peyda w-full h-10 mt-auto rounded-full bg-[#E86B42] text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-[#d95a2f] hover:shadow-lg hover:scale-[1.03] active:scale-95"
                >
                  افزودن به سبد
                </button>
              ) : (
                <div className="flex items-center justify-center gap-3 mt-3 h-10">
                  <button
                    onClick={() => increase(product.id)}
                    className="w-8 h-8 rounded-full bg-[#E86B42] text-white flex items-center justify-center text-lg font-bold cursor-pointer transition-all duration-300 hover:bg-[#d95a2f] hover:scale-110 hover:shadow-md active:scale-95"
                  >
                    +
                  </button>

                  <span className="font-peyda text-sm font-bold">
                    {qty}
                  </span>

                  <button
                    onClick={() => decrease(product.id)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-lg font-bold cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:scale-110 active:scale-95"
                  >
                    -
                  </button>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-md active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
                      );
        })}
      </div>
    </section>
  );
}