import { Category, ResponseDTO } from "../../common/types";
import { getCatalogByCategoryApi, getTotalProductsApi } from "./catalogApi";


export const getProductsByCategoryService = async (category: Category, searchParams: URLSearchParams): Promise<ResponseDTO> => {
  return getCatalogByCategoryApi(category, searchParams)
    .then( data => {
        return data;
    });
}

export const getTotalProductService = async (category: Category): Promise<ResponseDTO> => {
  return getTotalProductsApi(category)
    .then( data => {
      return data;
    });
}