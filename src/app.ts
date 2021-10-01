import express from 'express';
import cors, { CorsOptions } from 'cors';
// import morgan from 'morgan';
// import colors from 'colors';

import { routerProduct } from './routes/product';
import { routerCategory } from './routes/category';
import { whiteListDomains } from './shared/utils/whiteListDomains';

// colors.enable();

export const app = express();

interface whiteListDomains {
  origin: string | undefined;
  cb: ( err: Error | null, origin?: any ) => void
}

const corsOpts: CorsOptions = {
  origin: whiteListDomains,
  optionsSuccessStatus: 200,

};


app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));
app.use([routerProduct, routerCategory]);


