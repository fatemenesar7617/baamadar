export default function OrdersModal({ open, onClose }) {
  if (!open) return null;

  const sampleOrders = [
    {
      id: 1001,
      date: "۱۴۰۵/۰۴/۱۰",
      status: "تحویل شده",
      statusColor: "text-green-600 bg-green-50",
      items: "پنیر فتا صباح، دوغ محلی",
      total: "۱,۷۹۶,۰۰۰",
    },
    {
      id: 1002,
      date: "۱۴۰۵/۰۴/۰۵",
      status: "در حال ارسال",
      statusColor: "text-blue-600 bg-blue-50",
      items: "روغن زیتون بکر کریستال",
      total: "۸۹۸,۰۰۰",
    },
    {
      id: 1003,
      date: "۱۴۰۵/۰۳/۲۸",
      status: "تحویل شده",
      statusColor: "text-green-600 bg-green-50",
      items: "شکر سفید",
      total: "۸۹۸,۰۰۰",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-[115px]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-[390px] h-[calc(100vh-115px)] bg-white rounded-t-[28px] shadow-xl overflow-hidden flex flex-col">
        {/* هدر */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
          <button onClick={onClose} className="text-gray-500 text-2xl">×</button>
          <p className="font-peyda font-semibold text-base text-[#2F2F2F]">
            سفارش‌های من
          </p>
          <div className="w-8" />
        </div>

        {/* لیست سفارش‌ها */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {sampleOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 rounded-2xl p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-peyda text-xs text-gray-400">
                  #{order.id}
                </span>
                <span className={`font-peyda text-xs px-2 py-0.5 rounded-full ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
              <p className="font-peyda text-xs text-gray-500">{order.date}</p>
              <p className="font-peyda text-sm text-[#2F2F2F]">{order.items}</p>
              <div className="flex justify-between items-center pt-1">
                <p className="font-peyda text-sm font-bold text-[#E86B42]">
                  {order.total}
                  <span className="mr-1 text-xs text-orange-500">تومان</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
