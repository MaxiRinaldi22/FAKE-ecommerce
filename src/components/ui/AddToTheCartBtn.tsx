import useCartContext from "@/hooks/useCartContext";
import { ProdutctHookType } from "@/lib/types";

export function AddToTheCartFunction({
  children,
  product,
}: {
  children: React.ReactNode;
  product: ProdutctHookType;
}) {
  const { setCartInfo, cartInfo } = useCartContext();
  return (
    <button
      onClick={() =>
        setCartInfo([
          ...cartInfo,
          { ...product, amount: product.amount === undefined ? 1 : product.amount, totalPrice: product.totalPrice === undefined ? product.price : product.totalPrice },
        ])
      }
    >
      {children}
    </button>
  );
}
