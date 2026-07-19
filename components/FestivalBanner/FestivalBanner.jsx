"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FestivalBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const diff = endOfDay - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="px-4 mt-4">
      <div className="w-full h-16 flex items-center justify-between bg-red-100 border border-red-200 rounded-2xl p-3">
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
            <span className="font-peyda text-xs text-gray-600">
              ویژه امروز!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            {pad(timeLeft.hours)}
          </div>
          <span>:</span>
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            {pad(timeLeft.minutes)}
          </div>
          <span>:</span>
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
            {pad(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </section>
  );
}
