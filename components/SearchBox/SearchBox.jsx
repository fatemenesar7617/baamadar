"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBox({ query, setQuery }) {
  return (
    <div className="px-4 py-3">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو"
          className="w-full border border-gray-400 rounded-xl pr-10 py-2 outline-none text-right font-peyda"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FiSearch />
        </span>
      </div>
    </div>
  );
}
