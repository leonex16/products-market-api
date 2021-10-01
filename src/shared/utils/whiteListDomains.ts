export const whiteListDomains = ( origin: string | undefined, cb: any ) => {
  const whiteList = [
    'http://localhost',
    'https://leonex16.github.io/products-market-api'
  ];

  ( origin !== undefined && whiteList.indexOf( origin ) !== 1 )
    ? cb( null, true )
    : cb( new Error('Not allowed by CORS!!!') )
  
};