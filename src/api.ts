import { readFileSync, writeFileSync } from "fs";

import { MercadoPagoConfig, Preference } from "mercadopago";
import { AdresType, ProductsForDashboardType, ProdutctHookType } from "./lib/types";

interface PayInfoTypes {
  id: number;
  firstName: string;
  lastName: string;
  document: string;
  address: AdresType[];
  email: string;
  phone: string;
  typeOfShipping: string;
  items: ProductsForDashboardType[];
}

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

const api = {
  message: {
    async list(): Promise<PayInfoTypes[]> {
      // Leemos el archivo de la base de datos de los mensajes
      const db = readFileSync("db/message.db");

      // Devolvemos los datos como un array de objetos
      return JSON.parse(db.toString());
    },
    async add(products: PayInfoTypes): Promise<void> {
      // Obtenemos los mensajes
      const db = await api.message.list();

      // Si ya existe un mensaje con ese id, lanzamos un error
      if (db.some((_products) => _products.id === products.id)) {
        throw new Error("Message already added");
      }

      // Agregamos el nuevo mensaje
      const draft = db.concat(products);

      // Guardamos los datos
      writeFileSync("db/message.db", JSON.stringify(draft, null, 2));
    },
    async submit(
      firstName: PayInfoTypes["firstName"],
      lastName: PayInfoTypes["lastName"],
      document: PayInfoTypes["document"],
      address: AdresType[],
      email: PayInfoTypes["email"],
      phone: PayInfoTypes["phone"],
      typeOfShipping: PayInfoTypes["typeOfShipping"],
      products: ProdutctHookType[],
    ) {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const items: ProductsForDashboardType[] = products.map((product) => ({
        id: product.sku,
        unit_price: product.totalPrice,
        quantity: product.amount,
        title: product.title,
        currency_id: "USD",
      }));

      const preference = await new Preference(mercadopago).create({
        body: {
          items: items,
          // Aca se tiene que cargar toda la metadata que le tiene que llegar al dashboard
          metadata: {
            firstName,
            lastName,
            document,
            address: JSON.stringify(address),
            email,
            phone,
            typeOfShipping,
            items: JSON.stringify(items),
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return preference.init_point!;
    },
  },
};

export default api;
