export function CartFooter() {
  return (
    <div className="flex w-full items-center justify-between border-t border-gray-200 pt-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Código de cupón"
          className="rounded-md border border-gray-300 px-6 py-3 text-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="rounded-md bg-[#222529] px-6 py-3 text-sm font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
          APLICAR CUPÓN
        </button>
      </div>

      <button className="rounded-md bg-[#4E5053] px-6 py-3 text-sm font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700">
        ACTUALIZAR CARRITO
      </button>
    </div>
  );
}
