"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequelize) {
    return sequelize.define('Event', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        organizer: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        startDateTime: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        endDateTime: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        summary: {
            type: sequelize_1.DataTypes.STRING(250),
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
        },
        banner: {
            type: sequelize_1.DataTypes.STRING,
        },
        creationDateTime: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        lastUpdateDateTime: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
    });
});
