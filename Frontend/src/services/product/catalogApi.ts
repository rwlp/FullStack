import { Category } from "../../common/types";
import { AxiosConfigBuilder } from "../axiosConfigBuilder";
import axiosInstance from '../../common/config/axiosInstance';

export const getCatalogByCategory = async (category: Category, searchParams: URLSearchParams): Promise<unknown> =>  {
  searchParams.set('category', category);
  const configs = new AxiosConfigBuilder(`/catalog`)
    .setParams(searchParams)
    .build();

    console.log(configs);

  return axiosInstance.request(configs);
}