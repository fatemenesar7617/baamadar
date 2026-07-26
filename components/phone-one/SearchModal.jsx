import { useState } from "react";
import products from "@/data/products";

export default function SearchModal({
  open,
  onClose,
  onSelectProduct,
}) {

  const [query, setQuery] = useState("");

  if (!open) return null;

  const filtered = query.trim()
    ? products.filter((p) =>
        p.title.includes(query.trim()) ||
        p.price.includes(query.trim())
      )
    : [];

  return (
    <div
      className="
        fixed
        inset-0
        z-[60]
        flex
        justify-center
        items-start
        pt-[115px]
      "
    >
      <div
        className="absolute inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      <div
        className="
          relative
          z-[60]
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
        {/* هدر با اینپوت سرچ */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-gray-100">
          <button onClick={onClose} className="text-gray-500 text-2xl shrink-0">
            ×
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی محصول..."
              className="w-full h-10 border border-gray-200 rounded-xl pr-10 pl-4 font-peyda text-sm text-right outline-none focus:border-[#E86B42] transition-colors"
            />
            <img
              src="/icons/search 01.svg"
              className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-40"
            />
          </div>
        </div>

        {/* نتایج */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {query.trim() === "" ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <img
                src="/icons/search 01.svg"
                className="w-16 h-16 mb-4 opacity-20"
              />
              <p className="font-peyda text-sm">نام محصول را تایپ کنید</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p className="font-peyda text-sm">محصولی یافت نشد</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                    setQuery("");
                  }}
                  className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-gray-100 transition-colors"
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
                      {item.price}
                      <span className="mr-1 text-xs text-orange-500">تومان</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
