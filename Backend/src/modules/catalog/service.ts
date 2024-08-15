import { ParsedQs } from 'qs';
import { Category, GetCatalogQueryDTO } from './dto';
import catalogRepository from './repository';


class CatalogService {
  async catalogByCategory(query: ParsedQs) {
    const {sort, itemsPerPage, page, category } = query;
    const queryDto = new GetCatalogQueryDTO(sort as string, itemsPerPage as string, page as string, category as string);
    const products = await catalogRepository.getCatalogByCategory(queryDto);

    return products;
  }

  async getTotalByCategory(category: Category) {
    const total = await catalogRepository.getTotalByCategory(category);

    return total;
  }
}

export default new CatalogService();