"use client";

import { ProdutctHookType } from "@/lib/types";
import { useEffect, useState } from "react";

export default function useProdutcts() {
  const [data, setData] = useState<ProdutctHookType[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data.products);
    }

    getProducts();
  }, []);

  return data;
}
