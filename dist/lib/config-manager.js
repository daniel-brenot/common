"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.config = void 0;
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const constants = require("./constants");
const strongholds = require("./strongholds");
const system = require("./system");
const storage = require("./storage");
exports.config = {
    common: {
        dbCollections: [
            'leaderboard.power',
            'leaderboard.seasons',
            'leaderboard.world',
            'users.intents',
            'market.orders',
            'market.stats',
            'rooms',
            'rooms.objects',
            'rooms.flags',
            'rooms.intents',
            'rooms.terrain',
            'transactions',
            'users',
            'users.code',
            'users.console',
            'users.messages',
            'users.money',
            'users.notifications',
            'users.resources',
            'users.power_creeps'
        ],
        bots: null
    },
    constants,
    storage,
    strongholds,
    system
};
function load() {
    if (!process.env.MODFILE) {
        throw new Error('MODFILE environment variable is not set!');
    }
    const modsJsonFilename = path.resolve(process.cwd(), process.env.MODFILE);
    try {
        fs.statSync(modsJsonFilename);
    }
    catch (e) {
        console.log(`File "${modsJsonFilename}" not found`);
        return;
    }
    try {
        const modsJson = require(modsJsonFilename);
        console.log(`Loading mods from "${modsJsonFilename}"`);
        if (!modsJson.mods) {
            return;
        }
        modsJson.mods.forEach(file => {
            file = path.resolve(path.dirname(modsJsonFilename), file);
            try {
                const mod = require(file);
                if (!_.isFunction(mod)) {
                    console.error(`Cannot load "${file}": module.exports is not a function!`);
                }
                else {
                    mod(exports.config);
                    console.log(' - ' + file);
                }
            }
            catch (e) {
                console.error(`Error loading "${file}": ${e.stack || e}`);
            }
        });
        if (modsJson.bots) {
            exports.config.common.bots = _.mapValues(modsJson.bots, i => path.resolve(path.dirname(modsJsonFilename), i));
        }
    }
    catch (e) {
        console.error(`Cannot open "${modsJsonFilename}": ${e}`);
    }
}
exports.load = load;
