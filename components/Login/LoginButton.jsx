export default function LoginButton({ text, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full h-12 mt-6 rounded-xl text-white font-peyda text-sm font-semibold text-center
        transition-all duration-200
        bg-[#E86B42] ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
      `}
    >
      {text}
    </button>
  );
}