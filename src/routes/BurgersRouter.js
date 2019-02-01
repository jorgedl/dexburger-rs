import express from 'express';
import BurgersController from '../controllers/BurgersController';

const router = express.Router();

router.get('/', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  const burgers = await BurgersController.getBurgers();

  res.send(burgers);
});

export default router;
