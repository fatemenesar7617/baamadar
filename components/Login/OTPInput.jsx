"use client";

import { useRef, useEffect } from "react";

export default function OTPInput({ phoneNumber, onChange }) {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  function emitChange() {
    const code = inputRefs.current.map((ref) => ref?.value || "").join("");
    onChange?.(code);
  }

  function handleChange(e, index) {
    const val = e.target.value;
    if (val && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    emitChange();
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
      emitChange();
      return;
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  return (
    <div className="w-full text-right">
       <h1 className="font-peyda text-xl font-bold text-[#2F2F2F] mb-3">
         کد تایید
       </h1>

       <p className="font-peyda text-sm text-gray-400 mb-6">
         کد ارسال شده به {phoneNumber} را وارد کنید
       </p>

       <div className="w-full flex justify-between gap-3" dir="ltr">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="tel"
            inputMode="numeric"
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-14 h-14 text-center text-xl font-bold rounded-xl border border-gray-200 outline-none focus:border-[#E86B42]"
          />
        ))}
      </div>
    </div>
  );
}
