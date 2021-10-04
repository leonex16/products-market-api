import { Request, Response } from "express";
import { productService } from "../services/product";
import { IProduct } from "../shared/interfaces/Prouduct";
import { ShoppingCart } from "../shared/interfaces/ShoppingCart";

const _productService = productService;

const GET = async ( req: Request, res: Response ) => {
  const { name, category, sortBy, sortType } = req.query as any;
  const products: IProduct[] = await _productService.GET_ALL_PRODUCTS( { name, category, sortBy, sortType } );

  return res.status(200).json(products);
};

const POST_INVOICE = async ( req: Request, res: Response ) => {
  const baseUrl = req.protocol + '://' + req.headers.host;
  const shoppingCart: ShoppingCart = req.body;
  _productService.CREATE_INVOICE( shoppingCart, baseUrl, res );
  return res.status(200);
}

const GET_BY_ID = async ( req: Request, res: Response ) => {
  const productId = +req.params.productId;

  return isNaN( productId )
    ? res.status(400).json( { message: 'Product ID is not a number' } )
    : res.status(200).json( await ( _productService.GET_PRODUCT_BY_ID( productId ) ) );
};

export const productController = { GET, GET_BY_ID, POST_INVOICE };