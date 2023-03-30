export type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  amount: number
};

export type Cart = {
  products: Product[];
  totalPrice: number
}