import { useState } from "react";
import SortMeno from "./SortMeno";

export default function CategoryToolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-6 px-4 flex items-center justify-between">

        {/* مرتب سازی */}
        <div className="relative">

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-gray-700 text-sm font-peyda cursor-pointer"
          >
            <img
              src="/icons/frame.svg"
              alt="sort"
              className="w-4 h-4"
            />

            <span>مرتب سازی</span>

            <img
              src="/icons/arrow-up.svg"
              alt="arrow"
              className="w-3 h-3"
            />
          </div>

          {isOpen && <SortMeno />}

        </div>

        {/* سمت چپ */}
        <div className="flex items-center gap-6">

          <div className="flex items-center gap-1 text-gray-700 text-sm font-peyda">
            <img
              src="/icons/card.svg"
              alt="card"
              className="w-4 h-4"
            />
            <span>حامی کارت</span>
          </div>

          <div className="flex items-center gap-1 text-gray-700 text-sm font-peyda">
            <img
              src="/icons/takhfifat.svg"
              alt="discount"
              className="w-4 h-4"
            />
            <span>تخفیفات</span>
          </div>

        </div>

      </div>

      <hr className="mt-3 border-gray-300" />
    </>
  );
}