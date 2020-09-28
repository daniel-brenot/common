import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import * as constants from './constants';
import * as strongholds from './strongholds';
import * as system from './system';
import * as storage from './storage';

export const config = {
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
        bots: null as Record<any, string>
    },
    constants,
    storage,
    strongholds,
    system
};

export function load() {
    if (!process.env.MODFILE) {
        throw new Error('MODFILE environment variable is not set!');
    }
    const modsJsonFilename = path.resolve(process.cwd(), process.env.MODFILE);
    try {
        fs.statSync(modsJsonFilename);
    } catch (e) {
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
                } else {
                    mod(config);
                    console.log(' - ' + file);
                }
            } catch (e) {
                console.error(`Error loading "${file}": ${e.stack || e}`);
            }
        });

        if (modsJson.bots) {
            config.common.bots = _.mapValues(modsJson.bots, i => path.resolve(path.dirname(modsJsonFilename), i));
        }
    } catch (e) {
        console.error(`Cannot open "${modsJsonFilename}": ${e}`);
    }
}
