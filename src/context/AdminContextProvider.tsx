"use client";

import { createContext, useState } from "react";

type AdminContextType = {
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminContext = createContext<AdminContextType | null>(null);

function AdminContextProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminContextProvider };
