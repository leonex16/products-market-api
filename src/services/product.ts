import { Product } from "../models/Product";
import { db } from "../shared/databases/mysql";
import { IProduct } from "../shared/interfaces/Prouduct";

export const productService: any = {};

productService.GET_ALL_PRODUCTS = async () => {
  const productRepository = db?.getRepository(Product);
  const products: IProduct[] = await productRepository?.find() ?? [];

  products.map( product => {
    console.log((instanceof(product.category) Category === ).red)
    return product;
  })
  
  return [];
};