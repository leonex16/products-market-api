import express from 'express';

import morgan from 'morgan';
import colors from 'colors';

import { routerProduct } from './routes/product';

colors.enable();

export const app = express();

app.use(morgan('dev'));
app.use(routerProduct)


