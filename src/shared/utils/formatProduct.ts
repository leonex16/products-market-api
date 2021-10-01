import { Category } from "../../models/Category";
import { IProduct } from "../interfaces/Prouduct";

export const formatProduct = (product: IProduct): IProduct => {
  const { category, name, url_image } = product;
  const urlImage = url_image === null || url_image.length < 5 ? 'https://googledino.ru/assets/googe_dino.png' : url_image;

  if (category instanceof Category)
    return (product = { ...product, name: name.toLowerCase(), url_image: urlImage, category: category.id });

  return { ...product, name: name.toLowerCase(), url_image: urlImage };
};