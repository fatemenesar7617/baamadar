export default function Header() {
  return(
  <header className="flex  justify-between items-center px-4 py-3 bg-white shadow">

       {/*   علامت>کنارلوگو مادر */}
    <div className=" flex items-center gap-1">
      <img src="/logos/direction-left 01.svg" alt="direction" className="w-5 h-5"/>
    
      <img src="/logos/madarlogo.svg" alt="logo" className="w-24 h-auto"/>
  
    </div>
     {/*   سبد خرید سمت چپ */}
    <div>
      <img src="/logos/sabad.svg" alt="cart" className="w-12 h-auto"/>
      
      
      </div>
  </header>
  );
}