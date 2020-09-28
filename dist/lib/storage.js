"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetAllData = exports._connect = exports._connected = exports.queue = exports.db = exports.pubsub = exports.env = void 0;
const q = require("q");
const net = require("net");
const config_manager_1 = require("./config-manager");
const rpc_1 = require("./rpc");
let rpcClient;
function resetInterceptor(fn) {
    return fn;
}
exports.env = {
    keys: {
        ACCESSIBLE_ROOMS: 'accessibleRooms',
        ROOM_STATUS_DATA: 'roomStatusData',
        MEMORY: 'memory:',
        GAMETIME: 'gameTime',
        MAP_VIEW: 'mapView:',
        TERRAIN_DATA: 'terrainData',
        SCRIPT_CACHED_DATA: 'scriptCachedData:',
        USER_ONLINE: 'userOnline:',
        MAIN_LOOP_PAUSED: 'mainLoopPaused',
        ROOM_HISTORY: 'roomHistory:',
        ROOM_VISUAL: 'roomVisual:',
        MEMORY_SEGMENTS: 'memorySegments:',
        PUBLIC_MEMORY_SEGMENTS: 'publicMemorySegments:',
        ROOM_EVENT_LOG: 'roomEventLog:',
        ACTIVE_ROOMS: 'activeRooms',
        MAIN_LOOP_MIN_DURATION: 'tickRate'
    },
    get: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvGet')),
    mget: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvMget')),
    set: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvSet')),
    setex: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvSetex')),
    expire: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvExpire')),
    ttl: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvTtl')),
    del: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvDel')),
    hmget: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvHmget')),
    hmset: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvHmset')),
    hget: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvHget')),
    hset: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvHset')),
    sadd: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvSadd')),
    smembers: resetInterceptor(rpcClient.request.bind(rpcClient, 'dbEnvSmembers')),
};
exports.pubsub = {
    keys: {
        QUEUE_DONE: 'queueDone:',
        RUNTIME_RESTART: 'runtimeRestart',
        TICK_STARTED: 'tickStarted',
        ROOMS_DONE: 'roomsDone'
    },
    publish: resetInterceptor(rpcClient.request.bind(rpcClient, 'publish')),
    subscribe(channel, cb) {
        rpcClient.subscribe(channel, cb);
    }
};
exports.db = {};
exports.queue = {
    fetch: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueFetch')),
    add: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueAdd')),
    addMulti: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueAddMulti')),
    markDone: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueMarkDone')),
    whenAllDone: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueWhenAllDone')),
    reset: resetInterceptor(rpcClient.request.bind(rpcClient, 'queueReset'))
};
exports._connected = false;
function _connect() {
    if (exports._connected) {
        return q.when();
    }
    if (!process.env.STORAGE_PORT) {
        throw new Error('STORAGE_PORT environment variable is not set!');
    }
    console.log('Connecting to storage');
    const socket = net.connect(parseInt(process.env.STORAGE_PORT, 10), process.env.STORAGE_HOST);
    rpcClient = new rpc_1.RpcClient(socket);
    const defer = q.defer();
    const resetDefer = q.defer();
    function wrapCollection(collectionName) {
        const fn = (method) => () => {
            return rpcClient.request('dbRequest', collectionName, method, Array.prototype.slice.call(arguments));
        };
        const wrap = {
            find: fn('find'),
            findOne: fn('findOne'),
            by: fn('by'),
            clear: fn('clear'),
            count: fn('count'),
            ensureIndex: fn('ensureIndex'),
            removeWhere: fn('removeWhere'),
            insert: fn('insert'),
            update: resetInterceptor((query, update, params) => rpcClient.request('dbUpdate', collectionName, query, update, params)),
            bulk: resetInterceptor((bulk) => rpcClient.request('dbBulk', collectionName, bulk)),
            findEx: resetInterceptor((query, opts) => rpcClient.request('dbFindEx', collectionName, query, opts))
        };
        return wrap;
    }
    config_manager_1.config.common.dbCollections.forEach((i) => exports.db[i] = wrapCollection(i));
    exports._connected = true;
    defer.resolve();
    socket.on('error', err => {
        console.error('Storage connection lost', err);
        resetDefer.resolve('reset');
        exports._connected = false;
        setTimeout(exports._connect, 1000);
    });
    socket.on('end', () => {
        console.error('Storage connection lost');
        resetDefer.resolve('reset');
        exports._connected = false;
        setTimeout(_connect, 1000);
    });
    return defer.promise;
}
exports._connect = _connect;
function resetAllData() {
    rpcClient?.request('dbResetAllData');
}
exports.resetAllData = resetAllData;
