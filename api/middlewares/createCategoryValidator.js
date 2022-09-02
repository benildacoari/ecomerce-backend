import joi from 'joi';

const createCategorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createCategorySchema.validateAsync(req.body);
    next();    
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};
