import Image from "next/image";
export default function Banner(){
return(
<section className="px-4">
  <div className=" relative rounded-2xl overflow-hidden">
<Image
  src="/banners/banerred.jpg"
  alt="banner"
  width={1200}
  height={500}
  className="w-auto h-auto"
  priority
/>
<div className="flex justify-center items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
  <div className="w-2 h-2 rounded-full bg-white/50"></div>
  <div className="w-2 h-2 rounded-full bg-white/50"></div>
  <div className="w-2 h-2 rounded-full bg-white/50"></div>
  <div className="w-6 h-2 rounded-full bg-white"></div>
</div>
</div>
</section>
);
}