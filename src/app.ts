import express from 'express';
import cors, { CorsOptions } from 'cors';
// import morgan from 'morgan';
// import colors from 'colors';
// colors.enable();

import { routerProduct } from './routes/product';
import { routerCategory } from './routes/category';
import { whiteListDomains } from './shared/utils/whiteListDomains';

export const app = express();

const corsOpts: CorsOptions = {
  origin: whiteListDomains,
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());
app.use(express.static('src/templates'))
app.use([routerProduct, routerCategory]);
// app.use(morgan('dev'));