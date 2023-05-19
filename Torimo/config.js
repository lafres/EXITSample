import dotenv from "dotenv";

dotenv.config();

export const config = {
  user: process.env.DB_DEV_USERNMAE,
  password: process.env.DB_DEV_PASSWORD,
  server: process.env.DB_DEV_SERVER,
  databse: process.env.DB_DEV_DATABASE,
  port: parseInt(process.env.DB_DEV_PORT),
  options: {
    encrypt: false,
  },
  stream: true,
};
