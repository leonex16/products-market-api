import { Response } from "express";
import { Stream } from "stream";

export const cbCreatePdf = ( error: Error, stream: Stream, res: Response ) => {
  if ( error ) return error;
  res.set('Content-Type', 'application/pdf');
  return stream.pipe(res);
};