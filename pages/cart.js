import { useState } from "react";
import { useRouter } from "next/router";
import products from "@/data/products";
import categories from "@/data/categories";
import { useCart } from "@/components/CartContext";

function findProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) return product;

  for (const cat of categories) {
    const found = cat.products.find((p) => p.id === id);
    if (found) return found;
  }

  return null;
}

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
  } = useCart();

  const [step, setStep] = useState("cart");
  const [showClearModal, setShowClearModal] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const cartProducts = cart
    .map((item) => {
      const product = findProduct(item.id);

      return product
        ? {
            ...product,
            quantity: item.quantity,
          }
        : null;
    })
    .filter(Boolean);

  const getPrice = (item) => {
    const raw = item.price || item.newPrice || "0";
    return parseInt(raw.replace(/,/g, ""), 10);
  };

  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + getPrice(item) * item.quantity,
    0
  );

  const handleCheckout = () => {
    const oldOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const newOrder = {
      id: oldOrders.length
        ? Math.max(...oldOrders.map((o) => o.id), 1003) + 1
        : 1004,

      date: new Date().toLocaleDateString("fa-IR"),

      status: "در حال پردازش",
      statusColor: "text-yellow-600 bg-yellow-50",

      items: cartProducts
        .map((item) => item.title)
        .join("، "),

      total: totalPrice.toLocaleString("fa-IR"),

      customer: {
        name,
        phone,
        address,
      },
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...oldOrders])
    );

    clearCart();
    setStep("success");
  };

  const handleClose = () => {
    setStep("cart");
    setName("");
    setPhone("");
    setAddress("");
    router.push("/");
  };

  return (
    <main className="max-w-[390px] mx-auto min-h-screen bg-white flex flex-col pb-20">
          {/* Header */}

<div className="relative flex items-center justify-center border-b border-gray-100 px-4 py-4">

  {/* دکمه بستن */}
  <button
    onClick={() => router.back()}
    className="absolute right-4 w-10 h-10 flex items-center justify-center text-2xl text-gray-500 hover:text-[#E86B42] cursor-pointer"
  >
    {step === "cart" ? "×" : "←"}
  </button>

  {/* عنوان */}
  <p className="font-peyda font-semibold text-base">
    {step === "cart" &&
      `سبد خرید (${cart.length})`}

    {step === "shipping" && "اطلاعات ارسال"}

    {step === "success" && "ثبت سفارش"}
  </p>

  {/* حذف همه */}
  {step === "cart" && cartProducts.length > 0 && (
    <button
      onClick={() => setShowClearModal(true)}
      className="absolute left-4 flex items-center gap-1 text-red-500 text-sm font-peyda hover:text-red-600 transition-colors cursor-pointer"
    >
      <img
        src="/icons/trash.svg"
        alt="حذف همه"
        className="w-4 h-4"
      />
      حذف همه
    </button>
  )}

</div>

      
      {/* مرحله سبد خرید */}

      {step === "cart" && (
        <>

          

        

          <div className="flex-1 overflow-y-auto px-4">

            {cartProducts.length === 0 ? (

              <div className="flex h-full flex-col items-center justify-center">

                <img
                  src="/icons/shopping basket 02.svg"
                  alt="cart"
                  className="w-16 h-16 opacity-30"
                />

                <p className="mt-4 font-peyda text-sm text-gray-400">
                  سبد خرید شما خالی است
                </p>

                <button
                  onClick={() => router.push("/")}
                  className="mt-6 h-12 rounded-2xl bg-[#E86B42] px-8 text-white font-peyda cursor-pointer"
                >
                  بازگشت به فروشگاه
                </button>

              </div>

            ) : (

              <div className="space-y-5">
                                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-100 pb-5"
                  >
                    {/* عکس و اطلاعات */}
                    <div className="flex flex-1 items-center gap-3">

                      <img
                        src={item.image}
                        alt={item.title}
                        onClick={() => router.push(`/product/${item.id}`)}
                        className="w-20 h-20 object-contain cursor-pointer"
                      />

                      <div className="flex-1">

                        <h3 className="font-peyda text-sm font-semibold leading-6 text-right">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-right font-peyda text-sm font-bold text-[#E86B42]">
                          {item.price || item.newPrice}
                          <span className="mr-1 text-xs">
                            تومان
                          </span>
                        </p>

                      </div>

                    </div>

                    {/* کنترل تعداد */}

                    <div className="flex items-center gap-2 bg-[#E86B42] rounded-full px-2 py-1">

                      <button
                        onClick={() => increase(item.id)}
                        className="w-8 h-8 rounded-full bg-white text-[#E86B42] flex items-center justify-center text-lg font-bold hover:bg-orange-50 transition-colors cursor-pointer"
                      >
                        +
                      </button>

                      <span className="w-5 text-center font-peyda font-bold text-white">
                        {item.quantity}
                      </span>

                      {item.quantity === 1 ? (

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-white text-red-500 border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer"
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

                      ) : (

                        <button
                          onClick={() => decrease(item.id)}
                          className="w-8 h-8 rounded-full bg-white text-black border border-gray-200 flex items-center justify-center text-lg font-bold hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          −
                        </button>

                      )}

                    </div>

                  </div>
                ))}

              </div>

            )}

          </div>

          {cartProducts.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-4 space-y-4">

              <div className="flex items-center justify-between">

                <p className="font-peyda text-sm text-gray-500">
                  جمع کل
                </p>

                <p className="font-peyda text-lg font-bold text-[#E86B42]">
                  {totalPrice.toLocaleString("fa-IR")}
                  <span className="mr-1 text-xs">
                    تومان
                  </span>
                </p>

              </div>

              <button
                onClick={() => setStep("shipping")}
                className="w-full h-12 rounded-2xl bg-[#E86B42] text-white font-peyda font-semibold cursor-pointer hover:bg-[#d95a2f] transition-colors"
              >
                تکمیل خرید
              </button>

            </div>
          )}

        </>
      )}
      
                    {/* مرحله اطلاعات ارسال */}

      {step === "shipping" && (
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">

          <div>
            <label className="block mb-2 font-peyda text-sm text-gray-600">
              نام و نام خانوادگی
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کنید"
              className="w-full h-12 rounded-2xl border border-gray-200 px-4 text-right font-peyda outline-none focus:border-[#E86B42]"
            />
          </div>

          <div>
            <label className="block mb-2 font-peyda text-sm text-gray-600">
              شماره موبایل
            </label>

            <input
              type="tel"
              value={phone}
              maxLength={11}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 11);

                setPhone(val);

                if (val.length === 0) {
                  setPhoneError("");
                } else if (!val.startsWith("09")) {
                  setPhoneError("شماره باید با ۰۹ شروع شود");
                } else if (val.length < 11) {
                  setPhoneError("شماره باید ۱۱ رقم باشد");
                } else {
                  setPhoneError("");
                }
              }}
              className="w-full h-12 rounded-2xl border border-gray-200 px-4 text-right font-peyda outline-none focus:border-[#E86B42]"
            />

            {phoneError && (
              <p className="mt-1 text-xs text-red-500 font-peyda">
                {phoneError}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-peyda text-sm text-gray-600">
              آدرس
            </label>

            <textarea
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="آدرس کامل خود را وارد کنید"
              className="w-full rounded-2xl border border-gray-200 p-4 text-right font-peyda resize-none outline-none focus:border-[#E86B42]"
            />
          </div>

          <div className="pt-2 space-y-4">

            <div className="flex items-center justify-between">
              <p className="font-peyda text-sm text-gray-500">
                جمع کل
              </p>

              <p className="font-peyda text-lg font-bold text-[#E86B42]">
                {totalPrice.toLocaleString("fa-IR")}
                <span className="mr-1 text-xs">
                  تومان
                </span>
              </p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={
                !name ||
                !phone ||
                !address ||
                phone.length !== 11 ||
                phoneError
              }
              className="w-full h-12 rounded-2xl bg-[#E86B42] text-white font-peyda font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              پرداخت و ثبت سفارش
            </button>

          </div>

        </div>
      )}
            {/* صفحه موفقیت */}

      {step === "success" && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="mt-6 font-peyda text-lg font-bold">
            سفارش شما ثبت شد
          </h2>

          <p className="mt-3 text-sm text-gray-500 font-peyda leading-7">
            سفارش شما با موفقیت ثبت شد و در حال پردازش است.
          </p>

          <button
            onClick={handleClose}
            className="mt-8 w-full h-12 rounded-2xl bg-[#E86B42] text-white font-peyda font-semibold cursor-pointer hover:bg-[#d95b32] transition-colors"
          >
            بازگشت به فروشگاه
          </button>

        </div>
      )}

      {/* مودال حذف همه */}

      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

          <div className="w-full max-w-[320px] rounded-3xl bg-white p-6 text-center">

            <img
              src="/icons/trash.svg"
              alt="trash"
              className="mx-auto mb-4 h-12 w-12"
            />

            <h3 className="font-peyda text-base font-bold text-[#2F2F2F]">
              حذف همه محصولات
            </h3>

            <p className="mt-3 font-peyda text-sm leading-7 text-gray-500">
              آیا از حذف همه محصولات از سبد خرید اطمینان دارید؟
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 h-11 rounded-2xl border border-gray-200 font-peyda cursor-pointer hover:bg-gray-50"
              >
                انصراف
              </button>

              <button
                onClick={() => {
                  clearCart();
                  setShowClearModal(false);
                }}
                className="flex-1 h-11 rounded-2xl bg-[#E86B42] text-white font-peyda cursor-pointer hover:bg-[#d95b32]"
              >
                حذف
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
