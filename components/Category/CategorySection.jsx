import Image from "next/image";
export default function CategorySection() {
const categories = [
  {
    id: 1,
    title: "لوازم جانبی",
    image: "/images/janebi.svg",
  },
  {
    id: 2,
    title: "یکبار مصرف",
    image: "/images/yekbarmasraf.svg",
  },
  {
    id: 3,
    title: "سلامت",
    image: "/images/salamati.svg",
  },
  {
    id: 4,
    title: "لوازم تحریر",
    image: "/images/tahrir.svg",
  },
  {
    id:5,
    title:" افزودنی ها",
    image:"/images/afzodani.svg",
  },
  {
    id:6,
    title:"خشکبار،\n شیرینی",
    image:"/images/khoshkbar.svg",
  },
  {
    id:7,
    title:"کنسروی و\nآماده",
    image:"/images/konserv.svg",

  },
  {
    id:8,
    title:"تنقلات",
    image:"/images/tanagholat.svg",
  },
  {
    id:9,
    title:"منجمد،\nیخچالی",
    image:"/images/mongamed.svg",

  },
  {
    id:10,
    title:"آرایشی\nبهداشتی",
    image:"/images/arayeshi.svg",
  },
  {
    id:11,
    title:"مادر و\nکودک",
    image:"/images/madarkoodak.svg",
  },
  {
    id:12,
    title:"بهداشت\nخانگی",
    image:"/images/behdash.svg",
  },
  {
    id:13,
    title:"شور و\nترشیجات",
    image:"/images/shoor.svg",

  },
  {
    id:14,
    title:"نوشیدنی",
    image:"/images/noshidani.svg",
  },
  {
    id:15,
    title:"لبنیات",
    image:"/images/labaniyat.svg",
  },
  {
    id:16,
    title:"پروتئنی",
    image:"/images/porotein.svg",
  },
  {
    id:17,
    title:"اساسی و\nخواربار",
    image:"/images/asasi.svg",
  },
  {
    id:18,
    title:"صبحانه",
    image:"/images/sobhane.svg",
  },
  {
    id:19,
    title:"نان و\nشیرینی",
    image:"/images/nan.svg",
  },
{
  id:20,
  title:"میوه،\nسبزیجات",
  image:"/images/miveh.svg",
},
];
  return(

    <section className="px-4 mt-5">

      {/* عنوان */}
      <div className="flex justify-between items-center mb-4">
        <h2 className=" font-peyda font-bold text-sm text-gray-800">
          دسته بندی ها
        </h2>

        <span className=" font-peyda text-xs text-gray-600">
          انتخاب سریع محصولات
        </span>
      </div>

      {/* دسته بندی ها */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-3">
      {categories.map((item) => (
      <div
       key={item.id}
       className="flex flex-col items-center"
       >
      <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center">
      <Image
        src={item.image}
        alt={item.title}
        width={32}
        height={32}
        className="w-auto h-auto"
      />
    </div>

    <p className="text-xs text-gray-700 mt-2 text-center whitespace-pre-line">
      {item.title}
    </p>
  </div>
))}
        {/* اینجا کارت های دسته بندی قرار میگیرند */}

      </div>

    </section>
  );
}
