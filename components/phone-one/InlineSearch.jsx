export default function InlineSearch({
  open,
  onClose,
  query,
  setQuery,
}) {

  if (!open) return null;

  return (
    <div className="px-4 pb-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی محصول..."
            className="w-full h-10 border border-gray-200 rounded-xl pr-10 pl-4 font-peyda text-sm text-right outline-none focus:border-[#E86B42] transition-colors"
          />
          <img
            src="/icons/search 01.svg"
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-40"
          />
        </div>
        <button
          onClick={() => {
            setQuery("");
            onClose();
          }}
          className="w-10 h-10 border border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 text-lg shrink-0"
        >
          ×
        </button>
      </div>
    </div>
  );
}
