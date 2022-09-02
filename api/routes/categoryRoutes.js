import express from 'express';
import * as categoryController from '../controllers/categoryController.js';
import createCategoryValidator from '../middlewares/createCategoryValidator.js';

const router = express.Router();

router.route('/categories').post(createCategoryValidator, categoryController.createCategory);

export default router;