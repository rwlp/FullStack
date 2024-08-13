import { Category, ResponseDTO } from "../../common/types";
import { Product } from "../../types/types";
import { getCatalogByCategoryApi, getTotalProductsApi } from "./catalogApi.ts";


export const getProductsByCategoryService = async (category: Category, searchParams: URLSearchParams): Promise<ResponseDTO<Product[]>> => {
  return getCatalogByCategoryApi(category, searchParams)
    .then( data => {
        return data;
    });
}

export const getTotalProductService = async (category: Category): Promise<ResponseDTO<number>> => {
  return getTotalProductsApi(category)
    .then( data => data);
}