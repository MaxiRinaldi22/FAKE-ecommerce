"use client";

import Image from "next/image";
import logo from "/public/thot-navidad.png";
import Link from "next/link";
import useCartContext from "@/hooks/useCartContext";
import {
  FaBars,
  FaDesktop,
  FaPercent,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  const { cartInfo } = useCartContext();


  const totalItems = cartInfo.reduce((acc, product) => acc + product.amount, 0);  
  const total = cartInfo.reduce((acc, product) => acc + product.totalPrice, 0);

  return (
    <>
      <header className="flex h-[14vh] items-center justify-between border px-[10%]">
        <button>
          <Link href={"/producto"}>
            <Image
              src={logo}
              alt="Logo Thot"
              width={828}
              height={291}
              className="w-[150px]"
            />
          </Link>
        </button>

        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="h-[45px] w-[500px] rounded-l-sm border-2 border-orange-500 px-3 outline-none"
          />
          <button className="h-[45px] rounded-r-sm bg-orange-500 px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path d="M4.5 10a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M10 3a7 7 0 1 0 4.391 12.452l5.329 5.328a.75.75 0 1 0 1.06-1.06l-5.328-5.329A7 7 0 0 0 10 3" />
            </svg>
          </button>
        </form>

        <div className="flex w-[140px] items-center justify-between gap-4">
          <button className="relative">
            <Link href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h42v18a6 6 0 0 0 12 0V78h68v18a6 6 0 0 0 12 0V78h42a2 2 0 0 1 2 2Z"
                />
              </svg>
            </Link>
          </button>
          <div className="absolute left-[84%] top-[4.6%] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-orange-500 text-center text-white">
            <p className="font-semibold">{totalItems}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[13px] text-gray-500">carrito</p>
            <p className="text-md font-bold text-orange-400">
              US$
              {cartInfo.length === 0
                ? "0.00"
                : total.toFixed(2)}
            </p>
          </div>
        </div>
      </header>

      <div className="flex items-center  border-b border-gray-200 px-[10.5%]">
        {/* Categorías */}
        <div className="flex h-full items-center space-x-2 border-x px-4 py-5">
          <FaBars className="text-lg text-orange-500" />
          <span className="font-[500] text-sm text-orange-500">CATEGORÍAS</span>
        </div>

        <div className="w-full flex justify-between items-center px-4">
          {/* Armá tu PC */}
          <div className="flex items-center space-x-2">
            <FaDesktop className="text-lg text-gray-800" />
            <span className="font-medium text-gray-800">Armá tu PC</span>
          </div>

          {/* Opciones del menú */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPercent className="text-lg text-gray-800" />
              <span className="font-medium text-gray-800">
                Ofertas navideñas
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-lg text-gray-800" />
              <span className="font-medium text-gray-800">Ubicación</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg text-gray-800" />
              <span className="font-medium text-gray-800">Contacto</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
