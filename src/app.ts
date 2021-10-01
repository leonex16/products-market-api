import express from 'express';

import morgan from 'morgan';
import colors from 'colors';

import { routerProduct } from './routes/product';
import { routerCategory } from './routes/category';

colors.enable();

export const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use([routerProduct, routerCategory]);


