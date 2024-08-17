import { Router } from 'express';
import catalogController from './controller';

const catalogRouter = Router();

catalogRouter.get('/hotPrices', catalogController.getHotPrices);
catalogRouter.get('/getNewsProducts', catalogController.getNewestProducts);
catalogRouter.get('/totalItemsByCategory/:category', catalogController.getTotalItemsByCategory);
catalogRouter.get('/:category', catalogController.getCatalogByCategory);

// catalogRouter.get('brandNewModels', )

export default catalogRouter;