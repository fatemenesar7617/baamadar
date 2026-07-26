export default function PhoneInput({ value, onChange }) {
  return (
    <div className="w-full text-right">
      <p className="font-peyda text-sm text-gray-400 mb-6">
        شماره موبایل خود را وارد کنید
      </p>

      <div className="w-full h-12 border border-gray-300 rounded-2xl flex items-center px-4">
        <img
          className="flex justify-between"
          src="/login/Frame 1362790199.svg"
          alt="phone"
        />

        <input
          type="tel"
          inputMode="numeric"
          placeholder="شماره موبایل"
          maxLength={11}
          value={value}
          onChange={onChange}
          autoFocus
          className="w-full outline-none text-right font-peyda text-sm text-gray-500 bg-transparent pl-2"
        />
      </div>
    </div>
  );
}