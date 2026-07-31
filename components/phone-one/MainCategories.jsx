"use client";

import { useRef, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import categories from "@/data/categories";

export default function MainCategories({
  selectedCategory,
  onSelectCategory,
  onSelectSubCategory,
}) {


  const sliderRef = useRef(null);
  const itemRefs = useRef({});

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (selectedCategory && itemRefs.current[selectedCategory]) {
      itemRefs.current[selectedCategory].scrollIntoView({ 
        behavior: "smooth", 
        inline: "center",
        block: "nearest"
      });
    }
  }, [selectedCategory]);


  const handleCategoryClick = (id) => {

    if (selectedCategory === id) {

      onSelectCategory(null);
      onSelectSubCategory?.(null);

    } else {

      onSelectCategory(id);
      onSelectSubCategory?.(null);

    }

  };

  return (

    <section className="mt-4 px-4">


      <div

        ref={sliderRef}

        className="flex gap-4 overflow-x-auto whitespace-nowrap pb-8 pt-4 no-scrollbar cursor-grab select-none items-start"

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


        


{categories.map((item)=>(

          <CategoryItem
            ref={(el) => { itemRefs.current[item.id] = el; }}

            key={item.id}

            image={item.image}

            title={item.title}

            color={item.color}

            active={selectedCategory === item.id}

            onClick={() => handleCategoryClick(item.id)}

          />

        ))}


      </div>


    </section>

  );
}