console.log(process.env.PRODUCTION)
if ( process.env.PRODUCTION === 'TRUE' )
  require('dotenv').config({ path: '.env'})
else require('dotenv').config({ path: '.env.dev'});

import './server/server';
