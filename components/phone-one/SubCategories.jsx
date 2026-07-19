"use client";

import { useRef, useState } from "react";


export default function SubCategories({
  selectedCategory,
  selectedSubCategory,
  onSelectSubCategory
}) {


  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);



  const allSubCategories = [
    { id: "mast", title: "ماست", categoryId: "labaniyat" },
    { id: "doogh", title: "دوغ", categoryId: "labaniyat" },
    { id: "panir", title: "پنیر", categoryId: "labaniyat" },
    { id: "khame", title: "خامه", categoryId: "labaniyat" },
    { id: "kare", title: "کره", categoryId: "labaniyat" },
    { id: "kashk", title: "کشک", categoryId: "labaniyat" },
    { id: "roghan", title: "روغن", categoryId: "asasi" },
    { id: "shakar", title: "شکر", categoryId: "asasi" },
    { id: "berenj", title: "برنج", categoryId: "asasi" },
    { id: "adviyeh", title: "ادویه", categoryId: "asasi" },
  ];

  const subCategories = selectedCategory
    ? allSubCategories.filter((sub) => sub.categoryId === selectedCategory)
    : allSubCategories;



  return (

    <section className="mt-5 px-4">


      <div

        ref={sliderRef}

        className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar cursor-grab select-none"


        onMouseDown={(e)=>{

          setIsDragging(true);

          setStartX(
            e.pageX - sliderRef.current.offsetLeft
          );

          setScrollLeft(
            sliderRef.current.scrollLeft
          );

        }}


        onMouseLeave={()=>{

          setIsDragging(false);

        }}


        onMouseUp={()=>{

          setIsDragging(false);

        }}


        onMouseMove={(e)=>{

          if(!isDragging) return;

          e.preventDefault();


          const x =
          e.pageX - sliderRef.current.offsetLeft;


          const walk =
          (x - startX) * 1.5;


          sliderRef.current.scrollLeft =
          scrollLeft - walk;


        }}


      >


        {subCategories.map((item)=>(


          <button

            key={item.id}

            onClick={() => onSelectSubCategory(item.id)}

            className={`
              px-5 h-10 rounded-full 
              text-sm font-peyda flex-shrink-0
              border
              ${
                selectedSubCategory === item.id
                ? "border-[#E86B42] text-[#E86B42] bg-white"
                : "border-gray-200 bg-white text-gray-700"
              }
            `}

          >

            {item.title}

          </button>


        ))}


      </div>


    </section>

  );
}