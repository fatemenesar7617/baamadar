import LoginLogo from "./LoginLogo";
import PhoneInput from "./PhoneInput";
import OTPInput from "./OTPInput";
import LoginButton from "./LoginButton";
import LoginIllustration from "./LoginIllustration";

export default function LoginPage() {
  return (
    <main className="
      min-h-screen
      bg-white
      flex
      justify-center
      font-peyda
    ">

      <div className="
        w-full
        max-w-[900px]
        grid
        grid-cols-2
        gap-8
        p-8
      ">

        {/* ردیف اول */}
        <div className="border p-4">
          <LoginLogo />
        </div>

        <div className="border p-4">
          <LoginLogo />
        </div>


        {/* ردیف دوم */}
        <div className="border p-4">
          <PhoneInput />
        </div>

        <div className="border p-4">
          <PhoneInput />
        </div>


        {/* ردیف سوم */}
        <div className="border p-4">
          <LoginIllustration />
        </div>

        <div className="border p-4">
          <LoginIllustration />
        </div>

      </div>

    </main>
  );
}