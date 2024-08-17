import { ParsedQs } from 'qs';
import { Category, GetCatalogQueryDTORequest } from '../../common/DTOs/catalogDTOs/catalogDTOsRequests';
import { catalogRepository } from '../../common/repository/catalogRepository';
import { plainToInstance } from 'class-transformer';
import { ProductResponseDTO } from '../../common/utils/globalTypes';


class CatalogService {
  async catalogByCategory(query: ParsedQs) {
    const {sort, itemsPerPage, page, category } = query;
    const queryDto = new GetCatalogQueryDTORequest(sort as string, itemsPerPage as string, page as string, category as string);
    const products = await catalogRepository.getCatalogByCategory(queryDto);

    return plainToInstance(ProductResponseDTO, products);
  }

  async getTotalByCategory(category: Category) {
    const total = await catalogRepository.getTotalByCategory(category);

    return total;
  }

  async getHotPrices() {
    const products = await catalogRepository.getHotPrices();
    return plainToInstance(ProductResponseDTO, products);
  }

  async getNewModels() {
    const product = await catalogRepository.getNewModels();

    return plainToInstance(ProductResponseDTO, product);
  }

  
}

export default new CatalogService();