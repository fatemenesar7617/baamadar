export default function CategoryHeader({
  cart = []
}) {


  const totalCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );


  return(
    
    <div className="px-4 pt-4">

      <div className="flex items-center justify-between">


        {/* لوگو */}
        <img
          src="/logos/madarlogo.svg"
          alt="logo"
          className="w-20 h-auto"
        />



        {/* دکمه سبد و سرچ */}
        <div className="flex items-center gap-3">


          {/* دکمه مشاهده سبد */}
          <div className={`flex items-center px-2 gap-2 transition-all duration-500 ease-in-out overflow-hidden rounded-2xl ${
            totalCount > 0 ? 'bg-[#E86B42]' : ''
          }`}
            style={{
              maxWidth: totalCount > 0 ? '160px' : '48px',
              height: '48px',
            }}
          >
            {totalCount > 0 && (
              <div className="px-3 text-right shrink-0">
                <p className="text-white text-xs font-peyda font-semibold whitespace-nowrap">
                  مشاهده سبد
                </p>
                <p className="text-white/80 text-[10px] font-peyda whitespace-nowrap">
                  {totalCount} محصول
                </p>
              </div>
            )}

            {/* آیکون سبد */}
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-colors duration-500 ${
              totalCount > 0 ? 'border-white/50' : 'border-gray-400 bg-white'
            }`}>
              <img
                src="/icons/shopping basket 02.svg"
                className="w-5 h-5"
              />
            </div>
          </div>



          {/* سرچ */}
          <div className="w-10 h-10 border border-gray-400 rounded-2xl flex items-center justify-center">

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