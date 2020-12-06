"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sequelize_1 = require("../sequelize");
var router = express_1.Router();
router.get('/', function (req, res) {
    console.log('Getting events...');
    try {
        // const category = req.header('category');
        sequelize_1.EventModel.findAll().then(function (data) {
            console.log(data);
            res.json(data);
        });
    }
    catch (error) {
        console.error('An error occurred while getting events.');
    }
});
router.post('/', function (req, res) {
    console.log('Creating new event...');
    try {
        var eventData = req.body;
        var creationDateTime = new Date();
        var data = {
            title: eventData.title,
            organizer: eventData.organizer,
            startDateTime: new Date(eventData.startDateTime),
            endDateTime: new Date(eventData.endDateTime),
            summary: eventData.summary,
            description: eventData.description,
            banner: eventData.banner,
            creationDateTime: creationDateTime,
            lastUpdateDateTime: creationDateTime,
        };
        // Build the model
        sequelize_1.EventModel.create(data)
            .then(function () {
            console.log('Saved event in database');
            res.status(200).send();
        })
            .catch(function (error) {
            console.error('Could not save event:');
            console.error(error);
            res.status(500).send('An error occurred while creating the event.');
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the event.');
    }
});
exports.default = router;
