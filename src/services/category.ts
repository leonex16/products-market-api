import { Category } from "../models/Category";
import { db } from "../shared/databases/mysql";
import { toCapitalizeCase } from "../shared/utils/toCapitalizeCase";

const GET_ALL_CATEGORIES = async () => {
  const categoryRepository = db?.getRepository( Category );
  const categories = ( await categoryRepository?.find() )?.map( category => ( { ...category, name: toCapitalizeCase( category.name )} ) );
  return categories;
};

export const categoryService = { GET_ALL_CATEGORIES };