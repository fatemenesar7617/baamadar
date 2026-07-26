export default function LoginIllustration({ type }) {
  return (
    <div className="w-full flex justify-center items-end mt-8 pointer-events-none">
      {type === "bread" ? (
        <img
          src="/login/Frame 1362790198.png"
          alt="products"
          className="w-[390px] max-w-[95%] h-auto object-contain"
        />
      ) : (
        <img
          src="/login/baskettt.svg"
          alt="products"
          className="w-[260px] max-w-[75%] h-auto object-contain"
        />
      )}
    </div>
  );
}