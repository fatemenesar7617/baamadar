export default function LoginLogo() {
  return (
    <div className="
      flex
      flex-col
      items-center
      mt-14
    ">

      <img
        src="/login/logomarket.svg"
        alt="logo"
        className="w-16 h-auto"
      />

      <p className="
        mt-2
        font-peyda
        text-[#E86B42]
        text-sm
        font-bold
      ">
        مادر مارکت
      </p>

      <span className="
        font-peyda
        text-xs
        text-[#E86B42]
      ">
        فروشگاه سوپرمارکتی
      </span>

    </div>
  );
}