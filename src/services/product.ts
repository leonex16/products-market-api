import { Like } from "typeorm";
import ejs from 'ejs'
import htmlPdf from 'html-pdf'

import { Product } from "../models/Product";
import { db } from "../shared/databases/mysql";
import { IFilters } from "../shared/interfaces/Filters";
import { IProduct } from "../shared/interfaces/Prouduct";
import { formatProduct } from "../shared/utils/formatProduct";
import { transformFilters } from "../shared/utils/transformFilters";
import { Request, Response } from "express";
import { Stream } from "stream";
import { cbCreatePdf } from "../shared/utils/cbCreatePdf";
import { Invoice } from "../shared/interfaces/Invoice";
import { reducerShoppingCart } from "../shared/utils/reducerShoppingCart";




const GET_ALL_PRODUCTS = async ( filters: IFilters ) => {
  const productRepository = db?.getRepository( Product );
  const { where, order } = transformFilters( filters );

  if ( Object.prototype.hasOwnProperty.call(where, 'name') ) {
    where.name = Like(`%${where.name}%`) as any;
  };

  const products: IProduct[] = (await productRepository?.find( { where, order } )) ?? [];

  return products.map(formatProduct);
};

const CREATE_INVOICE = async ( invoice: Invoice, baseUrl: string, res: Response ) => {
  try {
    const items = reducerShoppingCart( invoice );
    const total = items.reduce( ( prev: number, item ) => prev = prev + item.subTotal, 0);
    const html: string = await ejs.renderFile('src/templates/invoice.ejs', { baseUrl, items, total }, { async: true } );
    const pdfOptions: htmlPdf.CreateOptions = {
      type: 'pdf',
      height: `${ 100 + 100 + 40 + ( items.length * 30 ) + 40 + 320 }px`,
      width: '400px'
    };
    
    htmlPdf.create( html, pdfOptions ).toStream( ( error: Error, stream: Stream ) => cbCreatePdf( error, stream, res ));
    
  } catch (error) {
    console.error(error)
  }
};

const GET_PRODUCT_BY_ID = async ( productId: number ) => {
  const productRepository = db?.getRepository( Product );
  return productRepository?.findOne( productId ) ?? {};
};

export const productService = { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, CREATE_INVOICE };