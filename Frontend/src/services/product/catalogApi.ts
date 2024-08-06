import { Category, ResponseDTO } from "../../common/types";
import { AxiosConfigBuilder } from "../axiosConfigBuilder";
import axiosInstance from '../../common/config/axiosInstance';

export const getCatalogByCategoryApi = async (category: Category, searchParams: URLSearchParams): Promise<ResponseDTO> =>  {
  searchParams.set('category', category);
  const configs = new AxiosConfigBuilder(`/catalog/${category}`)
    .setParams(searchParams)
    .build();

  return axiosInstance.request(configs);
}

export const getTotalProductsApi = async (category: Category): Promise<ResponseDTO> => {
  const configs = new AxiosConfigBuilder(`/catalog/totalItemsByCategory/${category}`)
    .build()

  return axiosInstance.request(configs);
}