export default function SliderDots() {
  return (
    <div className="flex items-center justify-center gap-1">
      {/* مستطیل فعال */}
      <span className="h-2 w-7 rounded-full bg-[#D8D8D8]" />

      {/* سه دایره */}
      <span className="h-2 w-2 rounded-full border border-[#d6d3d3] bg-white" />
      <span className="h-2 w-2 rounded-full border border-[#d3cfcf] bg-white" />
      <span className="h-2 w-2 rounded-full border border-[#e3dada] bg-white" />
    </div>
  );
}