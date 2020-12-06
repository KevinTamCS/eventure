import { Sequelize, Options } from 'sequelize';
import eventModel from '../models/event.model';

// We checked for existence in index.ts
const options: Options = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
} as Options;

const sequelize: Sequelize = new Sequelize(options);

// Initialize models
export const EventModel = eventModel(sequelize);

export default sequelize;
