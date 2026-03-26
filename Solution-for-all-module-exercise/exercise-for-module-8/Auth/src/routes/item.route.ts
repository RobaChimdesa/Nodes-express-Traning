// src/routes/item.routes.ts
import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { getItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/item.controller';

const router = Router();


router.get('/', getItems);
router.get('/:id', getItemById);
router.use(authenticate)

router.post('/', createItem);
router.put('/:id', authorize('ADMIN'), updateItem);   // only admins
router.delete('/:id', authorize('ADMIN'), deleteItem); // only admins

export default router;