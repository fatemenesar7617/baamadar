export default function Header3(){
return(
    
    <div className=" px-4 pt-4">

  <div className="flex items-center justify-between">

    {/* لوگو */}
    <img
      src="/logos/madarlogo.svg"
      alt="logo"
      className="w-20 h-auto"
    />

    {/* دکمه سبد و سرچ */}
    <div className="flex items-center gap-3">

        {/* آیکون سبد */}
        <div className="w-12 h-12 border border-gray-400 rounded-xl  flex items-center justify-center">
          <img
            src="/icons/shopping basket 02.svg"
            className="w-5 h-5"
          />
        </div>


      {/* سرچ */}
      <div className="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center">
        <img
          src="/icons/search 01.svg"
          className="w-5 h-5"
        />
      </div>

    </div>

  </div>

</div>
);
}