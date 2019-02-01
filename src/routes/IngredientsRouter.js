import express from 'express';
import IngredientsController from '../controllers/IngredientsController';

const router = express.Router();

router.get('/', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  const ingredients = await IngredientsController.getIngredients();

  res.send(ingredients);
});

router.get('/:id', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  const { params: { id } } = req;
  const ingredient = await IngredientsController.getIngredientById(id);

  res.send(ingredient);

  
});

export default router;
