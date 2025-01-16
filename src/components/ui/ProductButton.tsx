"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  sku: string;
  children: React.ReactNode;
};

export default function ProductsButton({ sku, children }: ButtonProps) {
  const router = useRouter();

  return (
    <button className="cursor-pointer" onClick={() => router.push(`/producto/${sku}`)}>{children}</button>
  );
}
