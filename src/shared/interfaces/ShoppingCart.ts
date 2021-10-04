import { Product } from "../../models/Product";

export interface ShoppingCart {
  [key: number]: Product[]
}