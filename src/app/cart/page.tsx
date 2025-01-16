"use client";

import { CartFile } from "@/app/cart/components/CartFile";
import { CheckoutForm } from "@/app/cart/components/CheckOut";
import useCartContext from "@/hooks/useCartContext";

export default function CartPage() {
  const { step } = useCartContext();


  return (
    <>
      {step === "Carrito" && <CartFile />}
      {step === "Checkout" && <CheckoutForm />}
    </>
  );
}
