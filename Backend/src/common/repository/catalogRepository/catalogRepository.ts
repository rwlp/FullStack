import { Product } from "@prisma/client";
import prisma from "../../config/prismaClient";
import { Category, GetCatalogQueryDTORequest } from "../../DTOs/catalogDTOs/catalogDTOsRequests";


class CatalogRepository {
  async getCatalogByCategory(query: GetCatalogQueryDTORequest): Promise<Product[]> {
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

  async getTotalByCategory(category: Category): Promise<number> {
    const total = await prisma.product.count({where: {
      category: category,
    }});

    return total;
  }

  async getHotPrices(): Promise<Product[] | null> {
    const products: Product[] | null = await prisma.$queryRaw`
     SELECT *, ABS("priceDiscount" - "priceRegular") as difference
     FROM "products"
     ORDER BY difference DESC
     LIMIT 20
    `;

    return products
  }

  async getNewModels(): Promise<Product[] | null> {
    const products: Product[] | null = await prisma.product.findMany({
      orderBy: {
        year: 'desc',
      }
    })
    
    return products
  }

  
}

export default new CatalogRepository();
