import { Router } from "express";
import { productController } from "../controllers/product";

export const routerProduct = Router();
const _productController = productController;
const { API_VERSION } = process.env;
const ENDPOINT = '/products';
const uri = API_VERSION
  ? API_VERSION + ENDPOINT
  : '/api/v1' + ENDPOINT;

routerProduct.get(uri, _productController.GET)


