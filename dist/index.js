"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcWorldSize = exports.getRoomNameFromXY = exports.roomNameToXY = exports.qSequence = exports.getDiff = exports.getGametime = exports.checkTerrain = exports.decodeTerrain = exports.encodeTerrain = exports.findPort = void 0;
const q = require("q");
const net = require("net");
const _ = require("lodash");
const configManager = require("./lib/config-manager");
const storage = require("./lib/storage");
const rpc = require("./lib/rpc");
exports.configManager = configManager;
exports.storage = storage;
exports.rpc = rpc;
function findPort(port) {
    const defer = q.defer();
    const server = net.createServer(socket => socket.end());
    server.listen(port, () => {
        server.once('close', function () {
            defer.resolve(port);
        });
        server.close();
    });
    server.on('error', (err) => {
        defer.resolve(findPort(port + 1));
    });
    return defer.promise;
}
exports.findPort = findPort;
function encodeTerrain(terrain) {
    let result = '';
    for (let y = 0; y < 50; y++) {
        for (let x = 0; x < 50; x++) {
            let objects = _.filter(terrain, { x, y }), code = 0;
            if (_.some(objects, { type: 'wall' })) {
                code = code | 1;
            }
            if (_.some(objects, { type: 'swamp' })) {
                code = code | 2;
            }
            result = result + code;
        }
    }
    return result;
}
exports.encodeTerrain = encodeTerrain;
function decodeTerrain(str, room) {
    const result = [];
    for (let y = 0; y < 50; y++) {
        for (let x = 0; x < 50; x++) {
            const code = parseInt(str.charAt(y * 50 + x), 10);
            if (code & 1) {
                result.push({ room, x, y, type: 'wall' });
            }
            if (code & 2) {
                result.push({ room, x, y, type: 'swamp' });
            }
        }
    }
    return result;
}
exports.decodeTerrain = decodeTerrain;
function checkTerrain(terrain, x, y, mask) {
    return (parseInt(terrain.charAt(y * 50 + x), 10) & mask) > 0;
}
exports.checkTerrain = checkTerrain;
function getGametime() {
    return storage.env.get(exports.storage.env.keys.GAMETIME).then(data => parseInt(data));
}
exports.getGametime = getGametime;
function getDiff(oldData, newData) {
    function getIndex(data) {
        let index = {};
        _.forEach(data, (obj) => index[obj._id] = obj);
        return index;
    }
    let result = {};
    let oldIndex = getIndex(oldData);
    let newIndex = getIndex(newData);
    _.forEach(oldData, (obj) => {
        if (newIndex[obj._id]) {
            let newObj = newIndex[obj._id];
            let objDiff = result[obj._id] = {};
            for (let key in obj) {
                if (_.isUndefined(newObj[key])) {
                    objDiff[key] = null;
                }
                else if ((typeof obj[key]) !== (typeof newObj[key]) || obj[key] && !newObj[key]) {
                    objDiff[key] = newObj[key];
                }
                else if (_.isObject(obj[key])) {
                    objDiff[key] = {};
                    for (let subkey in obj[key]) {
                        if (!_.isEqual(obj[key][subkey], newObj[key][subkey])) {
                            objDiff[key][subkey] = newObj[key][subkey];
                        }
                    }
                    for (let subkey in newObj[key]) {
                        if (_.isUndefined(obj[key][subkey])) {
                            objDiff[key][subkey] = newObj[key][subkey];
                        }
                    }
                    if (!_.size(objDiff[key])) {
                        delete result[obj._id][key];
                    }
                }
                else if (!_.isEqual(obj[key], newObj[key])) {
                    objDiff[key] = newObj[key];
                }
            }
            for (let key in newObj) {
                if (_.isUndefined(obj[key])) {
                    objDiff[key] = newObj[key];
                }
            }
            if (!_.size(objDiff)) {
                delete result[obj._id];
            }
        }
        else {
            result[obj._id] = null;
        }
    });
    _.forEach(newData, (obj) => {
        if (!oldIndex[obj._id]) {
            result[obj._id] = obj;
        }
    });
    return result;
}
exports.getDiff = getDiff;
function qSequence(collection, fn) {
    return _.reduce(collection, (promise, element, key) => promise.then(() => fn(element, key)), q.when());
}
exports.qSequence = qSequence;
function roomNameToXY(name) {
    name = name.toUpperCase();
    const match = name.match(/^(\w)(\d+)(\w)(\d+)$/);
    if (!match) {
        return [undefined, undefined];
    }
    let [, hor, x, ver, y] = match;
    return [hor === 'W' ? -x - 1 : +x, ver === 'N' ? -y - 1 : +y];
}
exports.roomNameToXY = roomNameToXY;
function getRoomNameFromXY(x, y) {
    return `${x < 0 ? 'W' + (-x - 1) : 'E' + (x)}${y < 0 ? 'N' + (-y - 1) : 'S' + (y)}`;
}
exports.getRoomNameFromXY = getRoomNameFromXY;
function calcWorldSize(rooms) {
    let minX = Infinity, minY = Infinity, maxX = 0, maxY = 0;
    rooms.forEach(room => {
        const [x, y] = exports.roomNameToXY(room._id);
        if (x < minX) {
            minX = x;
        }
        if (y < minY) {
            minY = y;
        }
        if (x > maxX) {
            maxX = x;
        }
        if (y > maxY) {
            maxY = y;
        }
    });
    return Math.max(maxX - minX + 1, maxY - minY + 1);
}
exports.calcWorldSize = calcWorldSize;
