import Category from '../models/Category.js';

const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.json({
      msg: 'category created',
      Category: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error creating a category',
      error,
    });
  } 
}

export {createCategory};