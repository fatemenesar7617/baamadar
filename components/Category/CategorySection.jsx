import { useRouter } from "next/router";
import Image from "next/image";
import categories from "@/data/categories";

export default function CategorySection() {
  const router = useRouter();

  return (
    <section className="px-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-peyda font-bold text-sm text-gray-800">
          دسته بندی ها
        </h2>
        <span className="font-peyda text-xs text-gray-600">
          انتخاب سریع محصولات
        </span>
      </div>

      <div className="grid grid-cols-4 gap-y-5 gap-x-3">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => router.push(`/page2?cat=${item.id}`)}
            className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:bg-green-50">
              <Image
                src={item.image}
                alt={item.title}
                width={32}
                height={32}
                className="w-auto h-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <p className="font-peyda font-semibold text-xs text-gray-700 mt-2 text-center whitespace-pre-line transition-colors duration-300 group-hover:text-green-600">
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}