import { ShoppingCart } from "./ShoppingCart";

export interface Invoice extends ShoppingCart {
  baseUrl?: string;
}