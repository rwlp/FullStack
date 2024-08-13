import { Category, ResponseDTO } from "../../common/types";
import { AxiosConfigBuilder } from "../axiosConfigBuilder";
import axiosInstance from '../../common/config/axiosInstance';
import { Product } from "../../types/types";

export const getCatalogByCategoryApi = async (category: Category, searchParams: URLSearchParams): Promise<ResponseDTO<Product[]>> =>  {
  searchParams.set('category', category);
  const configs = new AxiosConfigBuilder(`/catalog/${category}`)
    .setParams(searchParams)
    .build();

  return axiosInstance.request(configs);
}

export const getTotalProductsApi = async (category: Category): Promise<ResponseDTO<number>> => {
  const configs = new AxiosConfigBuilder(`/catalog/totalItemsByCategory/${category}`)
    .build()

  return axiosInstance.request(configs);
}