import prisma from '../../common/config/prismaClient';
import { Category, GetCatalogQueryDTO } from './dto';

class CatalogRepository {
  async getCatalogByCategory(query: GetCatalogQueryDTO) {
    const products  = await prisma.product.findMany({
      where: {
        category: query.category
      },
      orderBy: query.getOrderByForPrismaSearch(),
      skip: (query.page - 1) * query.itemsPerPage,
      take: query.itemsPerPage,
    });

    return products;
  }

  async getTotalByCategory(category: Category) {
    const total = await prisma.product.count({where: {
      category: category
    }});

    return total;
  }
}

export default new CatalogRepository();
