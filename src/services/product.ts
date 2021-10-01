import { Like } from "typeorm";

import { Product } from "../models/Product";
import { db } from "../shared/databases/mysql";
import { IFilters } from "../shared/interfaces/Filters";
import { IProduct } from "../shared/interfaces/Prouduct";
import { formatProduct } from "../shared/utils/formatProduct";



const GET_ALL_PRODUCTS = async ( filters: IFilters ) => {
  const productRepository = db?.getRepository( Product );
  const { name, sortBy, sortType } = filters;
  const where: {} | { name: string } = name === undefined || name.length === 0 ? {} : { name: Like(`%${name}%`) };
  const order: any = { [sortBy ?? 'name']: sortType?.toUpperCase() ?? 'ASC' };

  const products: IProduct[] = (await productRepository?.find( { where, order } )) ?? [];

  return products.map(formatProduct);
};

const GET_PRODUCT_BY_ID = async ( productId: number ) => {
  const productRepository = db?.getRepository( Product );
  return productRepository?.findOne( productId ) ?? {};
};

export const productService = { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID };