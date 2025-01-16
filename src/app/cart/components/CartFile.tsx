import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";

import CartInfo from "@/components/ui/CartInfo";
import { CartFooter } from "@/components/ui/CartFooter";
import { ProdutctHookType } from "@/lib/types";
import useCartContext from "@/hooks/useCartContext";

export function CartFile() {
  const { cartInfo, setCartInfo } = useCartContext();
  const [clickedBtn, setClickedBtn] = useState(false);
  const [productsCart, setProductsCar] = useState<ProdutctHookType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (clickedBtn) {
        redirect("/producto");
      }
    }, 1000);
  }, [clickedBtn]);

  useEffect(() => {
    const mergedCartInfo = Object.values(
      cartInfo.reduce<Record<string, ProdutctHookType>>((acc, product) => {
        const { sku } = product;

        if (!acc[sku]) {
          acc[sku] = {
            ...product,
            amount: product.amount === undefined ? 1 : product.amount,
            totalPrice:
              product.totalPrice === undefined
                ? product.price
                : product.totalPrice,
          };
        } else {
          acc[sku].amount += product.amount;
          acc[sku].totalPrice += product.totalPrice;
        }

        return acc;
      }, {}),
    );

    setProductsCar((prevCartInfo) => {
      const isEqual =
        prevCartInfo.length === mergedCartInfo.length &&
        prevCartInfo.every((product, index) => {
          const mergedProduct = mergedCartInfo[index];
          return (
            product.sku === mergedProduct.sku &&
            product.amount === mergedProduct.amount &&
            product.totalPrice === mergedProduct.totalPrice
          );
        });

      return isEqual ? prevCartInfo : mergedCartInfo;
    });
  }, []);

  const handleDeleteProducts = (sku: string) => {
    const updatedCartInfo = cartInfo
      .map((product) => {
        if (product.sku === sku) {
          if (product.amount > 1) {
            return {
              ...product,
              amount: product.amount - 1,
              totalPrice: product.totalPrice - product.price,
            };
          }
          return null;
        }
        return product;
      })
      .filter((product) => product !== null) as ProdutctHookType[];

    setProductsCar(updatedCartInfo);
  };

  const handleAddProducts = (sku: string) => {
    const updatedCartInfo = cartInfo.map((product) => {
      if (product.sku === sku) {
        return {
          ...product,
          amount: product.amount + 1,
          totalPrice: product.totalPrice + product.price,
        };
      }
      return product;
    });

    setProductsCar(updatedCartInfo);
  };

  useEffect(() => {
    setCartInfo(productsCart);
  }, [productsCart]);

  return (
    <>
      {cartInfo.length > 0 ? (
        <section className="flex w-full items-start justify-center px-48">
          <div className="flex w-[70%] flex-col items-start justify-center">
            <table className="w-full border-gray-300 text-sm">
              <thead>
                <tr>
                  <th className="py-4 text-start"></th>
                  <th className="py-4 text-start">PRODUCTO</th>
                  <th className="py-4 text-start">PRECIO</th>
                  <th className="py-4 text-start">CANTIDAD</th>
                  <th className="py-4 text-start">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartInfo.map((product) => (
                  <tr key={product.sku}>
                    <td className="border-t border-gray-300 py-2">
                      <Image
                        src={product.images[0]}
                        width={100}
                        height={100}
                        alt={product.title}
                      />
                    </td>
                    <td className="border-t border-gray-300 py-2 text-base font-[500]">
                      {product.title}
                    </td>
                    <td className="border-t border-gray-300 py-2 text-start text-sm font-[400] text-neutral-500">
                      US${product.price.toFixed(2)}
                    </td>
                    <td className="border-t border-gray-300 py-2">
                      <div className="flex">
                        <button
                          onClick={() => handleDeleteProducts(product.sku)}
                          className="border px-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path d="M19 11H5V13H19V11Z"></path>
                          </svg>
                        </button>
                        <p className="border-y px-4 py-2 text-lg font-[600]">
                          {product.amount}
                        </p>
                        <button onClick={() => handleAddProducts(product.sku)}>
                          <div className="flex h-full w-full items-center justify-center border px-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                              fill="currentColor"
                            >
                              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </td>
                    <td className="border-t border-gray-300 py-2 text-base font-bold">
                      ${product.totalPrice?.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <CartFooter />
          </div>
          <CartInfo />
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#D3D3D4">
              <path
                stroke-linecap="round"
                d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"
              />
              <path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z" />
            </g>
          </svg>
          <p className="text-base font-[600] text-neutral-500">
            No hay productos en el carrito
          </p>
          <button
            className={`${clickedBtn ? "bg-orange-500" : "bg-[#222529]"} mt-8 rounded-lg px-5 py-3 font-bold text-white transition duration-300 hover:bg-[#34383d]`}
            onClick={() => setClickedBtn(true)}
          >
            VOLVER A LA TIENDA
          </button>
        </section>
      )}
    </>
  );
}
