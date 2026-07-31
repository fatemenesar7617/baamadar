"use client";

import { forwardRef } from "react";

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const CategoryItem = forwardRef(function CategoryItem({
  image,
  title,
  color = "#E86B42",
  active = false,
  onClick,
}, ref) {
  const activeStyle = {
    borderColor: hexToRgba(color, 0.4),
    backgroundColor: hexToRgba(color, 0.05),
    boxShadow: `0 8px 20px ${hexToRgba(color, 0.15)}`,
  };
  const inactiveStyle = {
    borderColor: hexToRgba(color, 0.2),
    backgroundColor: hexToRgba(color, 0.04),
  };
  const dotStyle = {
    backgroundColor: color,
    boxShadow: `0 2px 8px ${hexToRgba(color, 0.5)}`,
  };
  const titleColor = "#1a1a1a";

  return (
    <div 
      ref={ref}
      onClick={onClick}
      className="flex flex-col items-center flex-shrink-0 cursor-pointer relative mx-1"
      style={{ zIndex: active ? 10 : 0 }}
    >
      {active && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-3 border-white shadow-md" style={dotStyle}></span>
      )}
      <div
        className={`relative rounded-2xl flex flex-col justify-start items-center ${
          active
            ? "w-16 h-24 border-2 shadow-lg"
            : "w-16 h-16 border-2 transition-all duration-500 justify-end"
        }`}
        style={active 
          ? activeStyle 
          : inactiveStyle}
      >
        {active && (
          <span className="mb-4 text-center font-peyda text-[10px] font-semibold px-1 leading-tight w-full whitespace-normal " style={{ color: titleColor }}>{title}</span>
        )}

        <img
          src={image}
          alt={title}
          className={`object-contain ${
            active ? "w-12 h-12 mt-auto mb-0" : "w-10 h-10 mt-auto mb-0"
          }`}
        />

      </div>

      {!active && (
        <span className="mt-2 text-center font-peyda text-xs font-medium text-gray-700 whitespace-normal">{title}</span>
      )}

    </div>
  );
});

export default CategoryItem;