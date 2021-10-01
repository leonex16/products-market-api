import { Request, Response } from "express";
import { categoryService } from "../services/category";
import { ICategory } from "../shared/interfaces/Category";

const _categoryService = categoryService;

const GET = async ( req: Request, res: Response ) => {
  const categories: ICategory[] | undefined = await _categoryService.GET_ALL_CATEGORIES();

  return res.status(200).json(categories);
};

export const categoryController = { GET };