import { Router } from 'express';
import catalogController from './controller';

const catalogRouter = Router();

catalogRouter.get('/:category', catalogController.getCatalogByCategory);
catalogRouter.get('/totalItemsByCategory/:category', catalogController.getTotalItemsByCategory);

export default catalogRouter;