"use client";

import { useState, useEffect } from "react";

import LoginLogo from "./LoginLogo";
import PhoneInput from "./PhoneInput";
import OTPInput from "./OTPInput";
import LoginButton from "./LoginButton";
import LoginIllustration from "./LoginIllustration";

export default function LoginPage() {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  function handlePhoneChange(e) {
    const value = e.target.value;

    setPhoneNumber(value);
    setHasValue(value.length > 0);

    if (error) {
      setError("");
    }
  }

  function handleContinue() {
    if (step === "phone") {
      const cleaned = phoneNumber.replace(/\D/g, "");

      if (!cleaned.startsWith("09")) {
        setError("شماره موبایل باید با ۰۹ شروع شود");
        return;
      }

      if (cleaned.length !== 11) {
        setError("شماره موبایل باید ۱۱ رقم باشد");
        return;
      }

      setError("");
      setPhoneNumber(cleaned);
      setStep("otp");
    } else if (step === "otp") {
      setIsVerified(true);
    }
  }

  function handleBack() {
    setStep("phone");
    setError("");
    setOtpValue("");
  }

  function handleResend() {
    setResendTimer(120);
    setOtpValue("");
  }

  useEffect(() => {
    if (resendTimer <= 0) return;

    const id = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [resendTimer]);

  useEffect(() => {
    if (step === "otp" && resendTimer === 0) {
      setResendTimer(120);
    }
  }, [step]);

  return (
        <div className="min-h-screen flex items-center justify-center bg-white rtl">
      <div className="w-[350px] h-[700px] flex flex-col items-center relative overflow-hidden">

        

        <LoginLogo />

        <div className="w-full flex flex-col items-center mt-12 px-6">

          {step === "phone" ? (
            <PhoneInput
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          ) : (
            <OTPInput
              phoneNumber={phoneNumber}
              onChange={setOtpValue}
            />
          )}

          {step === "phone" && error && (
            <p className="font-peyda text-sm text-red-500 mt-3">
              {error}
            </p>
          )}

          {step === "phone" && (
            <LoginButton
              text="ادامه"
              onClick={handleContinue}
              disabled={!hasValue}
            />
          )}

          {step === "otp" && (
            <LoginButton
              text="تایید"
              onClick={handleContinue}
              disabled={otpValue.length < 4}
            />
          )}

          {step === "otp" && (
            <div className="w-full mt-2 flex items-center justify-between">

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResend}
                  disabled={resendTimer > 0}
                  className={`font-peyda text-xs font-semibold ${
                    resendTimer > 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-[#E86B42] cursor-pointer"
                  }`}
                >
                  دریافت مجدد کد
                </button>

                {resendTimer > 0 && (
                  <span className="font-peyda text-xs text-gray-700">
                    {Math.floor(resendTimer / 60)}:
                    {String(resendTimer % 60).padStart(2, "0")}
                  </span>
                )}
              </div>

              <button
                onClick={handleBack}
                className="font-peyda text-xs text-[#E86B42] cursor-pointer flex items-center gap-2"
              >
                <img
                  src="/login/edit.svg"
                  alt="edit"
                  className="w-3 h-3"
                />
                ویرایش شماره
              </button>

            </div>
          )}

          {step === "phone" && (
            <p className="font-peyda text-xs text-gray-400 mt-4 text-center leading-6">
              ورود شما به معنی پذیرش{" "}
              <span className="text-[#E86B42] underline">
                شرایط خدمات
              </span>{" "}
              و{" "}
              <span className="text-[#E86B42] underline">
                حریم خصوصی
              </span>{" "}
              است.
            </p>
          )}

        </div>

        
<div className="absolute bottom-6 left-0 w-full flex justify-center">
          <LoginIllustration
            type={step === "phone" ? "bread" : "basket"}
          />
        </div>
      </div>
    </div>
  );
}