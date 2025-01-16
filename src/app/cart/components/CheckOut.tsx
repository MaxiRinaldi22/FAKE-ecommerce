import { useState } from "react";

import useCartContext from "@/hooks/useCartContext";
import { add } from "@/lib/add";

export function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    address: "",
    apartment: "",
    city: "",
    department: "Montevideo",
    phone: "",
    email: "",
    notes: "",
    createAccount: false,
    differentAddress: false,
    acceptTerms: false,
    receiveOffers: true,
    paymentMethod: "card",
    shippingOption: "localPickup",
    pickupName: "",
    pickupId: "",
  });
  const { cartInfo } = useCartContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    add(formData, cartInfo);
  };
  
  return (
    <form
      className="checkout-form grid grid-cols-1 gap-8 md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      {/* Detalles de facturación */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Detalles de facturación</h2>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Nombre *"
            className="rounded border p-2"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellidos *"
            className="rounded border p-2"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="text"
          name="idNumber"
          placeholder="Documento de identidad *"
          className="mb-4 w-full rounded border p-2"
          value={formData.idNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección de la calle *"
          className="mb-4 w-full rounded border p-2"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartamentos, habitación, etc. (opcional)"
          className="mb-4 w-full rounded border p-2"
          value={formData.apartment}
          onChange={handleInputChange}
        />
        <div className="mb-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="Ciudad *"
            className="rounded border p-2"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <select
            name="department"
            className="rounded border p-2"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="Montevideo">Montevideo</option>
            <option value="Canelones">Canelones</option>
            <option value="Maldonado">Maldonado</option>
            {/* Agregar más departamentos */}
          </select>
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono *"
          className="mb-4 w-full rounded border p-2"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Dirección de correo electrónico *"
          className="mb-4 w-full rounded border p-2"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notas del pedido (opcional)"
          className="mb-4 w-full rounded border p-2"
          value={formData.notes}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Resumen del pedido */}
      <div className="border p-5">
        <h2 className="mb-4 text-xl font-semibold">Tu Pedido</h2>
        <h3 className="px-1 font-[500]">Productos</h3>
        <div className="mb-4 flex flex-col gap-3 border-y p-4">
          {cartInfo.map((item) => (
            <div
              className="item-center flex justify-between gap-1"
              key={item.sku}
            >
              <p>
                {item.title} x {item.amount === undefined ? 1 : item.amount}
              </p>
              <p className="font-[400] text-neutral-500">
                US${item.totalPrice}
              </p>
            </div>
          ))}

          <p className="font-semibold">
            Total: US$
            {cartInfo
              .reduce((acc, product) => acc + product.totalPrice, 0)
              .toFixed(2)}
          </p>
        </div>

        <h3 className="mb-2 font-semibold">Envío</h3>
        <div className="mb-4">
          <label className="mb-2 block">
            <input
              type="radio"
              name="shippingOption"
              className="mr-2"
              value="localPickup"
              checked={formData.shippingOption === "localPickup"}
              onChange={handleInputChange}
            />
            Retiro en local (US$0.00)
          </label>
          <label className="mb-2 block">
            <input
              type="radio"
              className="mr-2"
              name="shippingOption"
              value="flexMontevideo"
              checked={formData.shippingOption === "flexMontevideo"}
              onChange={handleInputChange}
            />
            Montevideo Flex (US$15.00)
          </label>
          {/* Más opciones de envío */}
        </div>

        <h3 className="mb-2 font-semibold">Método de pago</h3>
        <select
          name="paymentMethod"
          className="mb-4 w-full rounded border p-2"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="card">Tarjeta</option>
          <option value="bankTransfer">Transferencia bancaria</option>
          <option value="cash">Efectivo / Redpagos</option>
        </select>

        <label className="mb-2 block">
          <input
            className="mr-2"
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
          />
          He leído y acepto los términos y condiciones de la web *
        </label>
        <label className="mb-4 block">
          <input
            className="mr-2"
            type="checkbox"
            name="receiveOffers"
            checked={formData.receiveOffers}
            onChange={handleInputChange}
          />
          Recibir ofertas
        </label>

        <button
          type="submit"
          className="w-full rounded bg-black p-2 text-white"
        >
          Realizar el pedido
        </button>
      </div>
    </form>
  );
};

