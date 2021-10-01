import { productService } from "../services/product";

const _productService = productService;
export const productController: any = {};

productController.GET = async (req: Request, res: Response) => {
  _productService.GET_ALL_PRODUCTS().then(console.log);
}