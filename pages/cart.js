import { useEffect, useState } from "react";
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
    cartCount,
  } = useCart();


  const [step, setStep] = useState("cart");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const cartProducts = cart
    .map((item) => {
      const product = findProduct(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
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
  const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]");

  const newOrder = {
    id: oldOrders.length
      ? Math.max(...oldOrders.map((o) => o.id), 1003) + 1
      : 1004,

    date: new Date().toLocaleDateString("fa-IR"),

    status: "در حال پردازش",
    statusColor: "text-yellow-600 bg-yellow-50",

    items: cartProducts.map((item) => item.title).join("، "),

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
    setAddress("");
    setPhone("");
    router.push("/");
  };

  return (
    <main className="max-w-[390px] mx-auto min-h-screen bg-white flex flex-col pb-20">
      {/* هدر */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
        <button
  onClick={() => router.back()}
  className="cursor-pointer text-gray-500 text-2xl w-10 h-10 flex items-center justify-center hover:text-[#E86B42] transition-colors duration-200"
  aria-label="بستن صفحه"
>
  {step === "cart" ? "×" : "→"}
</button>
        <p className="font-peyda font-semibold text-base text-[#2F2F2F]">
          {step === "cart" && `سبد خرید (${cartProducts.length})`}
          {step === "shipping" && "اطلاعات ارسال"}
          {step === "success" && "تایید سفارش"}
        </p>
        <div className="w-8" />
      </div>

      {/* مرحله ۱: سبد خرید */}
      {step === "cart" && (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {cartProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <img
                  src="/icons/shopping basket 02.svg"
                  className="w-16 h-16 mb-4 opacity-30"
                />
                <p className="font-peyda text-sm">سبد خرید شما خالی است</p>
                <button
                  onClick={() => router.push("/")}
                  className="mt-6 h-12 px-6 bg-[#E86B42] text-white rounded-2xl font-peyda font-semibold text-sm"
                >
                  بازگشت به فروشگاه
                </button>
              </div>
            ) : (
<div className="flex flex-row gap-3 overflow-x-auto overflow-y-hidden no-scrollbar pb-2">
                  {cartProducts.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm w-36 flex-shrink-0 h-64 flex flex-col overflow-hidden"
                    >
                      <div className="flex-1 flex flex-col">
                      <div
                        className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center cursor-pointer"
                        onClick={() => router.push(`/product/${item.id}`)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>

                      <h3 className="font-peyda text-xs font-medium mt-1 text-center min-h-[28px] flex items-center justify-center leading-5">
                        {item.title}
                      </h3>

                      <div className="font-iranyekan text-center mt-1">
                        <span className="font-peyda block text-xs font-bold mt-1">
                          {item.price || item.newPrice} تومان
                        </span>
                      </div>
                    </div>

                    {item.quantity === 1 ? (
                      <button
                        onClick={() => increase(item.id)}
                        className="font-peyda w-full h-8 mt-auto rounded-full bg-[#E86B42] text-white text-xs font-medium"
                      >
                        افزودن به سبد
                      </button>
                    ) : (
                      <div className="flex items-center justify-center gap-2 mt-2 h-8">
                        <button
                          onClick={() => increase(item.id)}
                          className="w-7 h-7 rounded-full bg-[#E86B42] text-white flex items-center justify-center text-sm font-bold"
                        >
                          +
                        </button>
                        <span className="font-peyda text-xs font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => decrease(item.id)}
                          className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold"
                        >
                          -
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
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
                  ))}
                </div>
            )}
          </div>

          {cartProducts.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-4 space-y-3">
              <div className="flex justify-between items-center">
                <p className="font-peyda text-sm text-gray-500">جمع کل</p>
                <p className="font-peyda text-lg font-bold text-[#E86B42]">
                  {totalPrice.toLocaleString("fa-IR")}
                  <span className="mr-1 text-xs text-orange-500">تومان</span>
                </p>
              </div>
              <button
                onClick={() => setStep("shipping")}
                className="w-full h-12 bg-[#E86B42] text-white rounded-2xl font-peyda font-semibold text-sm"
              >
                تکمیل خرید
              </button>
            </div>
          )}
        </>
      )}

      {/* مرحله ۲: اطلاعات ارسال */}
      {step === "shipping" && (
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          <div>
            <label className="block font-peyda text-sm text-gray-500 mb-1 text-right">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کنید"
              className="w-full h-12 border border-gray-200 rounded-2xl px-4 font-peyda text-sm text-right outline-none focus:border-[#E86B42] transition-colors"
            />
          </div>
          <div>
            <label className="block font-peyda text-sm text-gray-500 mb-1 text-right">
              شماره تماس
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
                } else if (val.length >= 2 && !val.startsWith("09")) {
                  setPhoneError("موبایل باید با ۰۹ شروع بشه");
                } else if (val.length < 11) {
                  setPhoneError("موبایل باید ۱۱ رقم باشه");
                } else {
                  setPhoneError("");
                }
              }}
              placeholder="شماره موبایل"
              className={`w-full h-12 border rounded-2xl px-4 font-peyda text-sm text-right outline-none transition-colors ${
                phoneError
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-200 focus:border-[#E86B42]"
              }`}
            />
            {phoneError && (
              <p className="font-peyda text-xs text-red-500 mt-1 text-right">
                {phoneError}
              </p>
            )}
          </div>
          <div>
            <label className="block font-peyda text-sm text-gray-500 mb-1 text-right">
              آدرس ارسال
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="آدرس کامل خود را وارد کنید"
              rows={3}
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 font-peyda text-sm text-right outline-none focus:border-[#E86B42] transition-colors resize-none"
            />
          </div>

          <div className="pt-2 space-y-3">
            <div className="flex justify-between items-center">
              <p className="font-peyda text-sm text-gray-500">جمع کل</p>
              <p className="font-peyda text-lg font-bold text-[#E86B42]">
                {totalPrice.toLocaleString("fa-IR")}
                <span className="mr-1 text-xs text-orange-500">تومان</span>
              </p>
            </div>
            <button
              onClick={handleCheckout}
              disabled={
                !name || !phone || !address || phoneError || phone.length !== 11
              }
              className="w-full h-12 bg-[#E86B42] text-white rounded-2xl font-peyda font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              پرداخت و ثبت سفارش
            </button>
          </div>
        </div>
      )}

      {/* مرحله ۳: موفقیت */}
      {step === "success" && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-peyda text-lg font-semibold text-[#2F2F2F] mb-2">
            سفارش شما با موفقیت ثبت شد!
          </p>
          <p className="font-peyda text-sm text-gray-500 mb-8">
            سفارش شما در حال پردازش است و به زودی ارسال می‌شود.
          </p>
          <button
            onClick={handleClose}
            className="w-full h-12 bg-[#E86B42] text-white rounded-2xl font-peyda font-semibold text-sm"
          >
            بازگشت به فروشگاه
          </button>
        </div>
      )}
    </main>
  );
}
