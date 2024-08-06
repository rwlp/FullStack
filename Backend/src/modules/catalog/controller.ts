import { Request, Response } from 'express';
import { Category, GetCatalogQueryDTO } from './dto.ts';
import { catalogService } from './index.ts';
import { responseWrapper } from '../../common/utils/methods.ts';

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
}

export default new CatalogController();
