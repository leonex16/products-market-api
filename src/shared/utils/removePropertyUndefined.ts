export const removePropertyUndefined = ( object: any ) => {
  Object.entries(object).forEach( ([ k, v ]) => {
    if ( k === 'undefined' || v === undefined ) delete object[k];
  });
  
  return object;
};