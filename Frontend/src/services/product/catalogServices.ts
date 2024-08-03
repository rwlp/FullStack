import { Category } from "../../common/types";
import { Product } from "../../types/types";
import { getCatalogByCategory } from "./catalogApi";


export const getProductsByCategoryService = async (category: Category, searchParams: URLSearchParams): Promise<Product[]> => {
    return getCatalogByCategory(category, searchParams)
        .then( data => {
            return data as Product[];
        });
    }