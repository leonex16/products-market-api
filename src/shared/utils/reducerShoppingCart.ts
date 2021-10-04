import { Product } from "../../models/Product";
import { Item } from "../interfaces/Item";
import { ShoppingCart } from "../interfaces/ShoppingCart";
import { tranformNameForInvoice } from "./tranformNameForInvoice";

export const reducerShoppingCart = ( shoppingCart: ShoppingCart ) => {
  return Object.values( shoppingCart ).reduce( ( prev: Item[], productsById: Product[] ) => {
    if ( Array.isArray( productsById ) === false ) return prev;
    const product = productsById[0];
    const name = tranformNameForInvoice( product.name );
    const price = product.price - product.discount;
    const itemsLen = productsById.length;
    const subTotal = price * itemsLen;
    prev.push({ name, price, itemsLen, subTotal });
    return prev;
  }, []) as Item[];
};