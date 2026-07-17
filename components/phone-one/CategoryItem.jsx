export default function CategoryItem({
  image,
  title,
  active = false,
  onClick,
}) {
  return (
    <div 
    onClick={onClick}
    className="flex flex-col items-center flex-shrink-0 w-16 cursor-pointer">

      <div
        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${
          active
            ? "border border-orange-300"
            : ""
        }`}
      >

        {active && (
          <span className="absolute -top-1 w-2 h-2 rounded-full bg-orange-400"></span>
        )}

        <img
          src={image}
          alt={title}
          className="w-10 h-10 object-contain"
        />

      </div>

      <span className="mt-2 text-xs font-peyda font-medium text-gray-700 text-center">
        {title}
      </span>

    </div>
  );
}