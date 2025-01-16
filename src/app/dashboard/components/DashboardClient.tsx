"use client";

import useAdminContext from "@/hooks/useAdminContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export function DashboardClient() {
  const { admin } = useAdminContext();

  useEffect(() => {
    if (!admin) {
      redirect("/login");
    }
  }, [admin]);

  return null
}
