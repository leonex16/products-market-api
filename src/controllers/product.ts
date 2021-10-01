import { Request, Response } from "express";
import { productService } from "../services/product";
import { IProduct } from "../shared/interfaces/Prouduct";

const _productService = productService;

const GET = async ( req: Request, res: Response ) => {
  const { name, sortBy, sortType } = req.query as any;
  const products: IProduct[] = await _productService.GET_ALL_PRODUCTS( { name, sortBy, sortType } );

  return res.status(200).json(products);
};

const GET_BY_ID = async ( req: Request, res: Response ) => {
  const productId = +req.params.productId;

  return isNaN( productId )
    ? res.status(400).json( { message: 'Product ID is not a number' } )
    : res.status(200).json( await ( _productService.GET_PRODUCT_BY_ID( productId ) ) );
};

export const productController = { GET, GET_BY_ID };