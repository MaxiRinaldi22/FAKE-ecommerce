"use client";

import useCartContext from "@/hooks/useCartContext";
import { CartBtnType } from "@/lib/types";

type ChangeCartBtnProps = {
  info: CartBtnType;
};

export function ChangeCartBtn({ info }: ChangeCartBtnProps) {
  const { cartInfo, step, setStep } = useCartContext();

  return (
    <>
      <button
        key={info.title}
        className={`${step === info.title ? "text-orange-500" : ""} ${
          (step === "Checkout" && info.title === "Carrito") ||
          (step === "Finalizar compra" &&
            (info.title === "Carrito" || info.title === "Checkout"))
            ? "text-black"
            : "#9ca3af"
        } ${info.title === "Checkout" || info.title === "Carrito" ? "cursor-pointer transition duration-300 hover:text-orange-500" : "cursor-default"} flex items-center justify-center font-semibold`}
        onClick={() => {
          if (info.title !== "Finalizar compra") {
            setStep(info.title);
          }
          if (cartInfo.length === 0) {
            setStep("Carrito");
          }
        }}
      >
        {info.title}
      </button>
      {info.title !== "Finalizar compra" && (
        <span className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke={
                (step === "Checkout" && info.title === "Carrito") ||
                (step === "Finalizar compra" &&
                  (info.title === "Carrito" || info.title === "Checkout"))
                  ? "#000000"
                  : "#9ca3af"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </span>
      )}
    </>
  );
}
