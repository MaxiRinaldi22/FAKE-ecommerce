"use client";

import { createContext, useState } from "react";
import { ProdutctHookType } from "@/lib/types";

type CartType = {
  cartInfo: ProdutctHookType[];
  setCartInfo: React.Dispatch<React.SetStateAction<ProdutctHookType[]>>;
  step: "Carrito" | "Checkout" | "Finalizar compra";
  setStep: React.Dispatch<
    React.SetStateAction<"Carrito" | "Checkout" | "Finalizar compra">
  >;
};

const CartContext = createContext<CartType | null>(null);

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cartInfo, setCartInfo] = useState<ProdutctHookType[]>([]);

  const [step, setStep] = useState<"Carrito" | "Checkout" | "Finalizar compra">(
    "Carrito",
  );


  return (
    <CartContext.Provider value={{ cartInfo, setCartInfo, step, setStep }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
