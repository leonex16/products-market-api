import { Category } from "../../models/Category";

export interface IProduct {
  id:       number;
  name:     string;
  url_image: null | string;
  price:    number;
  discount: number;
  category: Category;
}
