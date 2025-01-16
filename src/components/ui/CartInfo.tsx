import useCartContext from "@/hooks/useCartContext";
import { useState } from "react";

const CartInfo = () => {
  const [selectedShipping, setSelectedShipping] =
    useState("Retira en el local");
  const [country, setCountry] = useState("Uruguay");
  const [state, setState] = useState("Montevideo");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const { cartInfo, setStep } = useCartContext();
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShipping(e.target.value);
  };

  return (
    <div className="w-[40%] rounded-lg bg-white p-6">
      <div className="mb-6">
        <h2 className="mb-4 text-lg font-bold">Envío</h2>
        <form>
          {[
            "Retira en el local",
            "Montevideo Flex (lunes a sábado, entregas hasta las 20:00): US$5.00",
            "Canelones Flex (lunes a sábado, entregas hasta las 20:00) (Solo: Las Piedras, Progreso, Barros Blancos, Pando, Joaquín Suárez, Toledo, Casarino y Ciudad de la Costa): US$5.00",
            "Despacho para el interior (lunes a viernes) (el costo de DAC no está incluido): US$5.00",
          ].map((option) => (
            <label key={option} className="mb-2 block">
              <input
                type="radio"
                value={option}
                checked={selectedShipping === option}
                onChange={handleShippingChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </form>
        <p className="mt-2 text-sm text-gray-600">
          Enviar a <strong>{state}</strong>.
        </p>
      </div>

      <div className="border-t pt-6">
        <h2 className="mb-4 text-3xl font-semibold tracking-wide text-orange-500">
          Totales del carrito
        </h2>
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">País</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded border px-3 py-2"
            >
              <option>Uruguay</option>
              <option>Argentina</option>
              <option>Brasil</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Departamento
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded border px-3 py-2"
            >
              <option>Montevideo</option>
              <option>Canelones</option>
              <option>Maldonado</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Ciudad</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded border px-3 py-2"
              placeholder="Ciudad"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Código postal / ZIP
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full rounded border px-3 py-2"
              placeholder="Código postal / ZIP"
            />
          </div>

          <button
            type="button"
            className="w-full rounded bg-gray-800 py-2 text-white hover:bg-gray-700"
          >
            ACTUALIZAR TOTALES
          </button>
        </form>
      </div>

      {/* Totales */}
      <div className="mt-6 border-t pt-4">
        <div className="mb-2 flex justify-between">
          <span>Subtotal</span>
          <span>
            US$ {cartInfo.reduce((a, b) => a + b.totalPrice!, 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>
            US$ {cartInfo.reduce((a, b) => a + b.totalPrice!, 0).toFixed(2)}
          </span>
        </div>
        <p className="mt-4 rounded-md bg-[#E6F4D5] px-2 py-2 text-center text-base font-[500] text-green-600">
          Por favor revise nuevamente los productos de su carrito y las cuotas
          seleccionadas en pasarela de pagos.
        </p>
      </div>

      <button
        onClick={() => setStep("Checkout")}
        type="button"
        className="mt-3 w-full rounded bg-orange-500 flex  items-center justify-center gap-3 py-2 font-semibold text-white hover:bg-orange-600"
      >
        <span>FINALIZAR COMPRA</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="20;0"
                />
              </path>
              <path
                stroke-dasharray="12"
                stroke-dashoffset="12"
                d="M21 12l-7 7M21 12l-7 -7"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CartInfo;
