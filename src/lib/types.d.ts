export type ProdutctHookType = {
  title: string;
  sku: string;
  price: number;
  images: string[];
  amount: number;
  totalPrice: number;
};

export type AdresType = {
  addres: string;
  apartment: string;
  city: string;
  department: string;
  notes: string;
};

export type CartBtnType = {
  title: "Carrito" | "Checkout" | "Finalizar compra";
};

export type FormDataType = {
  firstName: string;
  lastName: string;
  idNumber: string;
  address: string;
  apartment: string;
  city: string;
  department: string;
  phone: string;
  email: string;
  notes: string;
  createAccount: boolean;
  differentAddress: boolean;
  acceptTerms: boolean;
  receiveOffers: boolean;
  paymentMethod: string;
  shippingOption: string;
  pickupName: string;
  pickupId: string;
};

export type ProductsForDashboardType = {
  id: string;
  unit_price: number;
  quantity: number;
  title: string;
  currency_id: string;
} 