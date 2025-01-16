"use client";

import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      redirect("/producto");
    }
  }, [path]);

  
}
