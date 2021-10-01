type sortBy = 'name' | 'price' | 'discount' | 'category';
type sortType = 'ASC' | 'DESC';

export interface IFilters {
  [key: string]: any;
  name?: string;
  sortBy?: sortBy;
  sortType?: sortType;
}