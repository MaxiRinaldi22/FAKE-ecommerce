"use server";

import { redirect } from "next/navigation";

import api from "@/api";
import { AdresType, FormDataType, ProdutctHookType } from "./types";

async function add(formData: FormDataType, cartInfo: ProdutctHookType[]) {
  const address: AdresType[] = [
    {
      addres: formData.address,
      apartment: formData.apartment,
      city: formData.city,
      department: formData.department,
      notes: formData.notes,
    },
  ];

  const url = await api.message.submit(
    formData.firstName,
    formData.lastName,
    formData.idNumber,
    address,
    formData.email,
    formData.phone,
    formData.shippingOption,
    cartInfo,
  );

  redirect(url);
}

export { add };
