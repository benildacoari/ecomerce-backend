import express from 'express';
import categoryRoutes from './routes/categoryRoutes.js';
const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(categoryRoutes);
export default api;