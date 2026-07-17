import Image from "next/image";

export default function FestivalBanner() {
  return (
    <section className="px-4 mt-4">

      <div className="w-full h-16 flex items-center justify-between bg-red-100 border border-red-200 rounded-2xl p-3">

        {/* سمت راست: آیکون + متن */}
        <div className="flex items-center gap-2">

          <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center">
            <Image src="/icons/g1.svg" alt="fire icon" width={20} height={20}
            className="w-auto h-auto"
            />
          </div>

          <div className="flex flex-col leading-4">
            <h3 className="font-bold text-sm text-red-600">
              جشنواره فروش
            </h3>
            <span className=" font-peyda text-xs text-gray-600">
              ویژه امروز!
            </span>
          </div>

        </div>

        {/* ⭐ اینجا باید تایمر بسازی */}
        <div className="flex items-center gap-1">

          {/* مربع قرمز - ساعت */}
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            00
          </div>

          <span>:</span>

          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            45
          </div>

          <span>:</span>

          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            59
          </div>

        </div>

      </div>

    </section>
  );
}