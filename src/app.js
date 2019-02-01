import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import IngredientsRouter from './routes/IngredientsRouter';
import BurgersRouter from './routes/BurgersRouter';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/ingredients', IngredientsRouter);
app.use('/burgers', BurgersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.status(500).json({
      message: err.message,
      error: err
  });
});

module.exports = app;
