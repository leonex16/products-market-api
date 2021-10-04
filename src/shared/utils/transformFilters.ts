import { IFilters } from "../interfaces/Filters";
import { removePropertyUndefined } from "./removePropertyUndefined";

export const transformFilters = ( filters: IFilters ) => {
  const where = {
    name: filters.name,
    category: filters.category
  };
  const order = {
    [filters.sortBy as string]: filters.sortType ?? 'ASC'
  };
  
  removePropertyUndefined(where);
  removePropertyUndefined(order);
  
  return { where, order };
};