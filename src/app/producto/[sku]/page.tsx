"use client";

import { AddToTheCartFunction } from "@/components/ui/AddToTheCartBtn";
import useProdutcts from "@/hooks/getProducts";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductSpecificPage() {
  const [selectedImg, setSelectedImg] = useState(0);
  const data = useProdutcts();

  const params = useParams();
  const sku = params.sku;

  const filterData = data.filter((product) => product.sku === sku);

  return (
    <section className="flex h-screen flex-col items-center justify-between gap-10">
      <div className="flex w-full justify-start p-10">
        <Link href="/producto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={32}
            height={32}
            fill="#000000"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-center px-96 py-10">
        {filterData.map((product) => (
          <div className="flex h-full w-full gap-3" key={product.sku}>
            <div className="flex h-full w-1/3 flex-col gap-3">
              {product.images.length > 1 &&
                product.images.map((image) => (
                  <button
                    key={image}
                    onClick={() =>
                      setSelectedImg(product.images.indexOf(image))
                    }
                  >
                    <Image
                      src={image}
                      alt={product.title}
                      width={250}
                      height={100}
                      className="h-full w-full rounded-md object-contain"
                    />
                  </button>
                ))}
            </div>
            <Image
              src={product.images[selectedImg]}
              alt={product.title}
              width={250}
              height={500}
              className="h-full max-h-[700px] w-full rounded-md border object-contain"
            />
            <div className="flex w-full flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-[500] text-black">
                  {product.title}
                </h1>
                <p className="font-[200] text-gray-400">{product.sku}</p>
                <p className="text-lg font-[500] text-black">
                  ${product.price}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <AddToTheCartFunction product={product}>
                  <div className="w-full rounded-full border bg-black px-4 py-3 font-bold text-white transition-all duration-150 hover:bg-gray-400">
                    Add to Cart
                  </div>
                </AddToTheCartFunction>
                <button className="w-full rounded-full border border-black bg-white px-4 py-3 font-[500] text-black">
                  Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
