"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
var sequelize_1 = require("sequelize");
var event_model_1 = __importDefault(require("../models/event.model"));
// We checked for existence in index.ts
var options = {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};
var sequelize = new sequelize_1.Sequelize(options);
// Initialize models
exports.EventModel = event_model_1.default(sequelize);
exports.default = sequelize;
