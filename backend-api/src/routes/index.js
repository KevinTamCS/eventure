"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var events_1 = __importDefault(require("../routes/events"));
var users_1 = __importDefault(require("../routes/users"));
var router = express_1.Router();
router.use('/events', events_1.default);
router.use('/users', users_1.default);
exports.default = router;
