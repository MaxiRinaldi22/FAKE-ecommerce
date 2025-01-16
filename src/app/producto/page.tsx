"use client";

import { AddToTheCartFunction } from "@/components/ui/AddToTheCartBtn";
import ProductsButton from "@/components/ui/ProductButton";
import useProdutcts from "@/hooks/getProducts";
import Image from "next/image";
import { useState } from "react";

export default function ProductsPage() {
  const [clicked, setClicked] = useState(false);
  const data = useProdutcts();

  const sortedData = !clicked
    ? data.sort((a, b) => b.price - a.price)
    : data.sort((a, b) => a.price - b.price);

  return (
    <section className="flex w-full flex-col items-center gap-10 py-20">
      <div className="w-full px-48">
        <button
          className="flex items-center gap-2 text-gray-500"
          onClick={() => setClicked(!clicked)}
        >
          <p>Sort by Price</p>
          <div
            className={`${
              clicked ? "rotate-180" : "rotate-0"
            } transition duration-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="#6b7280"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-9 px-48">
        {sortedData.map((product) => (
          <div
            key={product.sku}
            className="mb-10 flex h-[450px] w-full flex-col items-center justify-between gap-5"
          >
            <div className="group relative">
              <AddToTheCartFunction product={product}>
                <div className="absolute left-[87%] top-6 z-50 hidden h-[45px] w-[45px] items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-orange-500 group-hover:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                    className="fill-black hover:fill-white"
                  >
                    <path d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h42v18a6 6 0 0 0 12 0V78h68v18a6 6 0 0 0 12 0V78h42a2 2 0 0 1 2 2Z" />
                  </svg>
                </div>
              </AddToTheCartFunction>

              <ProductsButton sku={product.sku}>
                <div className="absolute left-0 top-[90%] z-50 hidden h-[5vh] w-full items-center justify-center bg-orange-500/95 transition delay-300 duration-500 ease-in-out group-hover:flex group-hover:scale-105">
                  <p className="text-sm font-[400] tracking-wide text-white">
                    VER DETALLES
                  </p>
                </div>
              </ProductsButton>

              <Image
                src={product.images[0]}
                alt={product.title}
                width={350}
                height={200}
                className="z-48 group relative max-h-[400px] w-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:bg-[#E5E5E5]"
              />
            </div>

            <div className="relative flex h-full max-h-20 w-full flex-col items-start justify-between text-start">
              <h2 className="text-base font-[500] text-black">
                {product.title}
              </h2>
              {/* <p className="text-sm font-[500] text-gray-400">
                  {product.sku}
                </p> */}
              <p className="text-lg font-bold text-orange-500">
                US${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
