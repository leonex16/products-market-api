import { Router } from "express";
import { categoryController } from "../controllers/category";

const router = Router();
const _productController = categoryController;
const API_VERSION = process.env.API_VERSION ?? '/api/v1';
const ENDPOINT = '/categories';
const uri = API_VERSION + ENDPOINT;

router.get(uri, _productController.GET);

export const routerCategory = router;
