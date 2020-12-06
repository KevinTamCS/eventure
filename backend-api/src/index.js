"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize environment variables
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app_1 = __importDefault(require("./app"));
// Check if environment variables are properly set
if (!(process.env.DB_HOST &&
    process.env.DB_USER &&
    process.env.DB_DIALECT &&
    process.env.DB_DATABASE &&
    process.env.DB_PASSWORD &&
    process.env.PORT)) {
    console.error('Database environment variables are not set! Exiting...');
    process.exit(-1);
}
// Environment variables are good, start the app
console.log('Starting Eventure backend...');
app_1.default();
