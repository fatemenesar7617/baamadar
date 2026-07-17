"use client";

import { useState } from "react";

export default function BottomNav() {


  const [activeItem, setActiveItem] = useState("home");


  const items = [
    {
      id:"home",
      title:"خانه",
      icon:"/icons/menu-home.svg"
    },
    {
      id:"cart",
      title:"سبد خرید",
      icon:"/icons/shopping basket 02.svg"
    },
    {
      id:"orders",
      title:"سفارش‌ها",
      icon:"/icons/receipt.svg"
    },
    {
      id:"profile",
      title:"پروفایل",
      icon:"/icons/user.svg"
    },
  ];


  return (

    <div className="
      absolute
      bottom-0
      left-0
      right-0
      h-[72px]
      bg-white
      border-t
      border-gray-100
      flex
      items-center
      justify-around
      z-50
    ">


      {items.map((item)=>(

        <div
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={`
            flex
            flex-col
            items-center
            gap-1
            cursor-pointer
            ${
              activeItem === item.id
              ? "text-[#E86B42]"
              : "text-gray-400"
            }
          `}
        >


          <img
            src={item.icon}
            alt={item.title}
            className={`
              w-6
              h-6
              object-contain
              ${
                activeItem === item.id
                ? "opacity-100"
                : "opacity-60"
              }
            `}
          />


          <span className="
            text-xs
            font-peyda
          ">
            {item.title}
          </span>


        </div>

      ))}


    </div>

  );
}