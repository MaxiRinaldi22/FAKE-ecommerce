import { ChangeCartBtn } from "@/components/ChangeCartBtn";
import { cartTimeLineInformation } from "@/lib/const";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-10">
      <div className="flex items-center justify-center gap-2 py-10 text-center text-2xl font-semibold text-gray-400">
        {cartTimeLineInformation.map((info, id) => (
          <div className="flex" key={id}>
            <ChangeCartBtn info={info} />
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
