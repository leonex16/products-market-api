export const tranformNameForInvoice = ( productName: string ) => {
  return productName.split(' ')
    .map( word => word.slice( 0, 4 ))
    .join(' ');
};