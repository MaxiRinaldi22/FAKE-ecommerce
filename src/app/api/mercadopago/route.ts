import { Payment } from "mercadopago";
import api, { mercadopago } from "@/api";


export async function POST(request: Request) {
  const body: { data: { id: string } } = await request.json();

  // Obtenemos el pago
  const payment = await new Payment(mercadopago).get({ id: body.data.id });

  if (payment.status === "approved") {
    // Agregamos el mensaje en el servidor (ya lo tienes implementado)
    await api.message.add({
      id: payment.id!,
      firstName: payment.metadata.first_name,
      lastName: payment.metadata.last_name,
      document: payment.metadata.document,
      address: JSON.parse(payment.metadata.address),
      email: payment.metadata.email,
      phone: payment.metadata.phone,
      typeOfShipping: payment.metadata.type_of_shipping,
      items: JSON.parse(payment.metadata.items),
    });

    // FALTARIA EL REVALIDATE PATH (Pero nose para que es)
  }

  return new Response(null, { status: 200 });
}
