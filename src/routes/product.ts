import { Router } from "express";
import { productController } from "../controllers/product";

const router = Router();
const _productController = productController;
const API_VERSION = process.env.API_VERSION ?? '/api/v1';
const ENDPOINT = '/products';
const uri = API_VERSION + ENDPOINT;

router.get(uri, _productController.GET);
router.get(uri + '/:productId', _productController.GET_BY_ID);
router.post(uri + '/generate-invoice', _productController.POST_INVOICE);

export const routerProduct = router;
