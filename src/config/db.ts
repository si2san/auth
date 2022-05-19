import 'dotenv/config';

export const mysql = {
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'auth',
  password: process.env.DB_PASSWORD || 'auth',
  database: process.env.DB_DATABASE || 'auth',
};
