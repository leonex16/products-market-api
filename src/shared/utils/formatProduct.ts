import { Category } from "../../models/Category";
import { IProduct } from "../interfaces/Prouduct";

export const formatProduct = (product: IProduct): IProduct => {
  const { category, name } = product;

  if (category instanceof Category)
    return (product = { ...product, name: name.toLowerCase(), url_image: 'URL_DINASOUR RAWW', category: category.id });

  return { ...product, name: name.toLowerCase(), url_image: 'URL_DINASOUR RAWW' };
};