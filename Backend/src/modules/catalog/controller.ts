import { Request, Response } from 'express';
import { catalogService } from './index';
import { responseWrapper } from '../../common/utils/methods';
import { Category } from '../../common/DTOs/catalogDTOs/catalogDTOsRequests';
import { Product } from '@prisma/client';
import { ResponseWrapperDTO } from '../../common/utils/globalTypes';

class CatalogController {
  async getCatalogByCategory (req: Request, res: Response) {
    const params = new URLSearchParams(req.query.toString());
    params.set('category', req.params.category);
    const products = await catalogService.catalogByCategory({...req.query, category: req.params.category});

    responseWrapper(res, 'Successfull products fetched', 200, 'Product[]' , products, true);
  }

  async getTotalItemsByCategory(req: Request, res: Response) {
    const param = req.params.category;
    const total = await catalogService.getTotalByCategory(param as Category);

    responseWrapper(res, `Total for ${param} category`, 200, 'number', total);

  }

  async getHotPrices(_req: Request, res: Response) {
    const productsHotPrices = await catalogService.getHotPrices();

    responseWrapper(res, '20 first products with more discount prices', 200, 'Product[]', productsHotPrices, true);
  }

  async getNewestProducts(_req: Request, res: Response) {
    const productsNewests = await catalogService.getNewModels();

    responseWrapper(res, '20 first products with more discount prices', 200, 'Product[]', productsNewests, true);
  }
}

export default new CatalogController();
