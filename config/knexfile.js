 
import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: '../migrations'
    }
  }
};

export default config;

