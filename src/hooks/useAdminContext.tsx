import { AdminContext } from "@/context/AdminContextProvider";
import { useContext } from "react";

export default function useAdminContext() {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
