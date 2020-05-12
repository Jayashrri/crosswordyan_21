const Grid = require('../api/models/Grid');
const Word = require('../api/models/Word');
const config = require('../config/config');

const signale = require('signale');
const mongoose = require('mongoose');
const path = require("path");
const fs = require("fs");

function getJsonFromPath(path) {
    const rawJson = fs.readFileSync(path);
    return JSON.parse(rawJson);
}

mongoose.connect(config.mongodb.dbURI, config.mongodb.setting)
    .then(async () => {
        signale.success('*****Database Connection Successfull******');
        let gridData = getJsonFromPath(path.resolve(__dirname, "..", "data", "CrosswordData.json"));
        let wordData = getJsonFromPath(path.resolve(__dirname, "..", "data", "WordData.json"));
        
        let grid = await Grid.findOne({id: 0});
        if(!grid){
            await Grid.create({id: 0, data: JSON.stringify(gridData)});
            await Word.insertMany(wordData);
        }

        signale.success('*****Populated Database Successfully*****');
        process.exit();

    }).catch(err => {
        signale.fatal(new Error(err));
        signale.warn('Could not connect to Database. Exiting now...');
        process.exit();
    })