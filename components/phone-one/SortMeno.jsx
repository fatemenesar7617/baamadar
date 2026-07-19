export default function SortMeno({ sortOption, onSortChange, onClose }) {
  const options = [
    { value: "bestselling", label: "پرفروش‌ترین" },
    { value: "highestDiscount", label: "بیشترین تخفیف" },
    { value: "newest", label: "جدیدترین" },
    { value: "cheapest", label: "ارزان‌ترین" },
    { value: "mostExpensive", label: "گران‌ترین" },
    { value: "support", label: "حامی کارت" },
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4 z-10">
      {options.map((option) => (
        <span
          key={option.value}
          onClick={() => {
            onSortChange(sortOption === option.value ? null : option.value);
            onClose();
          }}
          className={`font-peyda text-sm cursor-pointer transition-colors ${
            sortOption === option.value
              ? "text-[#E86B42] font-semibold"
              : "text-gray-700 hover:text-[#E86B42]"
          }`}
        >
          {option.label}
        </span>
      ))}
    </div>
  );
}
