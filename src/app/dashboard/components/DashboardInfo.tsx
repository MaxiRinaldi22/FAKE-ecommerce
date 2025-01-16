import api from "@/api";

export default async function DashboardInfo() {
  const buyInformation = await api.message.list();

  return (
    <div className="min-h-screen p-6 md:px-60">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Dashboard de Pedidos
      </h1>

      <div className="space-y-8">
        {buyInformation.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-gray-300 bg-white shadow-md"
          >
            {/* Encabezado */}
            <div className="rounded-t-lg bg-orange-50 p-4">
              <h2 className="text-xl font-semibold text-orange-500">
                Pedido <span className="text-2xl font-bold">#{order.id}</span> -{" "}
                {order.firstName} {order.lastName}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-medium">Envío:</span>{" "}
                <span className="font-bold uppercase text-green-600">
                  {order.typeOfShipping}
                </span>
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="p-4">
              <div className="mb-2 grid grid-cols-1 gap-2">
                <p>
                  <span className="font-semibold">Documento:</span>{" "}
                  {order.document}
                </p>
                <p>
                  <span className="font-semibold">Teléfono:</span> {order.phone}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {order.email}
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div className="border-t p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Dirección de Envío
              </h3>
              {order.address.map((addr, index) => (
                <div
                  key={index}
                  className="rounded bg-gray-50 p-3 text-gray-700 shadow-sm"
                >
                  <p>
                    <span className="font-medium">Calle: </span>
                    {addr.addres}
                  </p>
                  <p>
                    <span className="font-medium">Apartamento/Casa: </span>
                    {addr.apartment}
                  </p>
                  <p>
                    <span className="font-medium">Ciudad:</span> {addr.city}
                  </p>
                  <p>
                    <span className="font-medium">Departamento:</span>{" "}
                    {addr.department}
                  </p>
                  <p>
                    <span className="font-medium">Notas:</span>{" "}
                    {addr.notes || "N/A"}
                  </p>
                </div>
              ))}
            </div>

            {/* Items */}
            <div className="border-t p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Items del Pedido
              </h3>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b pb-2 text-gray-800"
                  >
                    <span>
                      {item.title}{" "}
                      <span className="font-bold text-orange-500">
                        x{item.quantity}
                      </span>
                    </span>
                    <span className="font-semibold">
                      ${item.unit_price} USD
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
