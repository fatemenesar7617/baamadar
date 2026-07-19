import { useState, useEffect } from "react";
import products from "@/data/products";
import categories from "@/data/categories";

export default function CartModal({
  open,
  onClose,
  cart = [],
  setCart,
}) {

  const [step, setStep] = useState("cart");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (open) {
      setStep("cart");
      setName("");
      setAddress("");
      setPhone("");
      setPhoneError("");
    }
  }, [open]);

  if (!open) return null;

  const findProduct = (id) => {

  const cartItem = cart.find((item) => item.id === id);

  if (cartItem) return cartItem;

  const product = products.find((p) => p.id === id);

  if (product) return product;

  for (const cat of categories) {
    const found = cat.products.find((p) => p.id === id);
    if (found) return found;
  }

  return null;
};

  const cartProducts = cart.map((item) => {
    const product = findProduct(item.id);
    return { ...product, quantity: item.quantity };
  }).filter(Boolean);

  const getPrice = (item) => {
    const raw = item.price || item.newPrice || "0";
    return parseInt(raw.replace(/,/g, ""), 10);
  };

  const totalPrice = cartProducts.reduce((sum, item) => {
    return sum + getPrice(item) * item.quantity;
  }, 0);

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

  const handleCheckout = () => {
    setCart([]);
    setStep("success");
  };

  const handleClose = () => {
    setStep("cart");
    setName("");
    setAddress("");
    setPhone("");
    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        justify-center
        items-start
        pt-[115px]
      "
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
      />

      <div
        className="
          relative
          w-[390px]
          h-[calc(100vh-115px)]
          bg-white
          rounded-t-[28px]
          shadow-xl
          overflow-hidden
          flex
          flex-col
        "
      >
        {/* هدر */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
          <button onClick={handleClose} className="text-gray-500 text-2xl">
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
                </div>
              ) : (
                <div className="space-y-3">
                  {cartProducts.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                      <div className="flex-1 text-right">
                        <p className="font-peyda text-sm text-[#2F2F2F] leading-6">
                          {item.title}
                        </p>
                        <p className="font-peyda text-sm font-bold text-[#E86B42] mt-1">
                          {item.price || item.newPrice}
                          <span className="mr-1 text-xs text-orange-500">تومان</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-colors"
                        >
                          <img src="/icons/trash.svg" className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => increase(item.id)}
                          className="w-8 h-8 rounded-full bg-[#E86B42] text-white flex items-center justify-center text-lg font-bold"
                        >+</button>
                        <span className="font-peyda text-sm w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => decrease(item.id)}
                          className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-lg font-bold"
                        >-</button>
                      </div>
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
                  phoneError ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#E86B42]'
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
                disabled={!name || !phone || !address || phoneError || phone.length !== 11}
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
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      </div>
    </div>
  );
}
