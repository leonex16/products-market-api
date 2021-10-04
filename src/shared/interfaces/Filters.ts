type sortBy = 'name' | 'price' | 'discount' | 'category';
type sortType = 'ASC' | 'DESC';

export interface IFilters {
  [key: string]: any;
  name?: string;
  category?: string;
  sortBy?: sortBy;
  sortType?: sortType;
}