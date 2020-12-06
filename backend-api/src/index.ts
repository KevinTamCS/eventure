// Initialize environment variables
import dotenv from 'dotenv';
dotenv.config();

import startApp from './app';

// Check if environment variables are properly set
if (
  !(
    process.env.DB_HOST &&
    process.env.DB_USER &&
    process.env.DB_DIALECT &&
    process.env.DB_DATABASE &&
    process.env.DB_PASSWORD &&
    process.env.PORT
  )
) {
  console.error('Database environment variables are not set! Exiting...');
  process.exit(-1);
}

// Environment variables are good, start the app
console.log('Starting Eventure backend...');
startApp();
