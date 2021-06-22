import { createConnection } from "typeorm";
import User from "../entity/User";
import { config } from "dotenv";
config();
export const connection = createConnection({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT,10) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Password*123",
  database: process.env.DB_SCHEMA || "test",
  entities: [User],
  synchronize: true,
  logging: false,
});
