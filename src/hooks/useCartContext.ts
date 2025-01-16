import { CartContext } from "@/context/CartContextProvider";
import { useContext } from "react";

export default function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
