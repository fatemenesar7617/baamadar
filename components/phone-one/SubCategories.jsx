"use client";

import { useRef, useState } from "react";


export default function SubCategories({
  selectedSubCategory,
  onSelectSubCategory
}) {


  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);



  const subCategories = [
    {
      id: "mast",
      title: "ماست"
    },
    {
      id: "doogh",
      title: "دوغ"
    },
    {
      id: "panir",
      title: "پنیر"
    },
    {
      id: "khame",
      title: "خامه"
    },
    {
      id: "kare",
      title: "کره"
    },
    {
      id: "kashk",
      title: "کشک"
    },
  ];



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