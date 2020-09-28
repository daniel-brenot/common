"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMODITIES = exports.INTERSHARD_RESOURCES = exports.COLORS_ALL = exports.RESOURCES_ALL = exports.BODYPARTS_ALL = exports.OWER_INFO = exports.STRONGHOLD_DECAY_TICKS = exports.STRONGHOLD_RAMPART_HITS = exports.INVADER_CORE_CONTROLLER_DOWNGRADE = exports.INVADER_CORE_CONTROLLER_POWER = exports.INVADER_CORE_EXPAND_TIME = exports.INVADER_CORE_CREEP_SPAWN_TIME = exports.INVADER_CORE_HITS = exports.EFFECT_COLLAPSE_TIMER = exports.EFFECT_INVULNERABILITY = exports.PWR_OPERATE_FACTORY = exports.PWR_OPERATE_CONTROLLER = exports.PWR_FORTIFY = exports.PWR_OPERATE_POWER = exports.PWR_DISRUPT_TERMINAL = exports.PWR_REGEN_MINERAL = exports.PWR_REGEN_SOURCE = exports.PWR_SHIELD = exports.PWR_DISRUPT_SOURCE = exports.PWR_DISRUPT_TOWER = exports.PWR_DISRUPT_SPAWN = exports.PWR_OPERATE_TERMINAL = exports.PWR_OPERATE_OBSERVER = exports.PWR_OPERATE_EXTENSION = exports.PWR_OPERATE_LAB = exports.PWR_OPERATE_STORAGE = exports.PWR_OPERATE_TOWER = exports.PWR_OPERATE_SPAWN = exports.PWR_GENERATE_OPS = exports.POWER_CLASS = exports.POWER_CREEP_LIFE_TIME = exports.POWER_CREEP_MAX_LEVEL = exports.POWER_CREEP_DELETE_COOLDOWN = exports.POWER_CREEP_SPAWN_COOLDOWN = exports.POWER_LEVEL_POW = exports.POWER_LEVEL_MULTIPLY = exports.EVENT_HEAL_TYPE_RANGED = exports.EVENT_HEAL_TYPE_MELEE = exports.EVENT_ATTACK_TYPE_NUKE = exports.EVENT_ATTACK_TYPE_HIT_BACK = exports.EVENT_ATTACK_TYPE_DISMANTLE = exports.EVENT_ATTACK_TYPE_RANGED_MASS = exports.EVENT_ATTACK_TYPE_RANGED = exports.EVENT_ATTACK_TYPE_MELEE = exports.EVENT_TRANSFER = exports.EVENT_POWER = exports.EVENT_EXIT = exports.EVENT_UPGRADE_CONTROLLER = exports.EVENT_RESERVE_CONTROLLER = exports.EVENT_REPAIR = exports.EVENT_HEAL = exports.EVENT_HARVEST = exports.EVENT_BUILD = exports.EVENT_ATTACK_CONTROLLER = exports.EVENT_OBJECT_DESTROYED = exports.EVENT_ATTACK = exports.SIGN_PLANNED_AREA = exports.SIGN_RESPAWN_AREA = exports.SIGN_NOVICE_AREA = exports.SYSTEM_USERNAME = exports.INVADERS_ENERGY_GOAL = exports.POWER_BANK_RESPAWN_TIME = exports.PORTAL_MAX_TIMEOUT = exports.PORTAL_MIN_TIMEOUT = exports.PORTAL_UNSTABLE = exports.REACTION_TIME = exports.BOOSTS = exports.REACTIONS = exports.RESOURCE_ESSENCE = exports.RESOURCE_EMANATION = exports.RESOURCE_SPIRIT = exports.RESOURCE_EXTRACT = exports.RESOURCE_CONCENTRATE = exports.RESOURCE_CONDENSATE = exports.RESOURCE_MACHINE = exports.RESOURCE_HYDRAULICS = exports.RESOURCE_FRAME = exports.RESOURCE_FIXTURES = exports.RESOURCE_TUBE = exports.RESOURCE_ALLOY = exports.RESOURCE_ORGANISM = exports.RESOURCE_ORGANOID = exports.RESOURCE_MUSCLE = exports.RESOURCE_TISSUE = exports.RESOURCE_PHLEGM = exports.RESOURCE_CELL = exports.RESOURCE_DEVICE = exports.RESOURCE_CIRCUIT = exports.RESOURCE_MICROCHIP = exports.RESOURCE_TRANSISTOR = exports.RESOURCE_SWITCH = exports.RESOURCE_WIRE = exports.RESOURCE_LIQUID = exports.RESOURCE_CRYSTAL = exports.RESOURCE_COMPOSITE = exports.RESOURCE_BATTERY = exports.RESOURCE_PURIFIER = exports.RESOURCE_REDUCTANT = exports.RESOURCE_OXIDANT = exports.RESOURCE_GHODIUM_MELT = exports.RESOURCE_KEANIUM_BAR = exports.RESOURCE_ZYNTHIUM_BAR = exports.RESOURCE_LEMERGIUM_BAR = exports.RESOURCE_UTRIUM_BAR = exports.RESOURCE_OPS = exports.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = exports.RESOURCE_CATALYZED_GHODIUM_ACID = exports.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = exports.RESOURCE_CATALYZED_ZYNTHIUM_ACID = exports.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = exports.RESOURCE_CATALYZED_LEMERGIUM_ACID = exports.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = exports.RESOURCE_CATALYZED_KEANIUM_ACID = exports.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = exports.RESOURCE_CATALYZED_UTRIUM_ACID = exports.RESOURCE_GHODIUM_ALKALIDE = exports.RESOURCE_GHODIUM_ACID = exports.RESOURCE_ZYNTHIUM_ALKALIDE = exports.RESOURCE_ZYNTHIUM_ACID = exports.RESOURCE_LEMERGIUM_ALKALIDE = exports.RESOURCE_LEMERGIUM_ACID = exports.RESOURCE_KEANIUM_ALKALIDE = exports.RESOURCE_KEANIUM_ACID = exports.RESOURCE_UTRIUM_ALKALIDE = exports.RESOURCE_UTRIUM_ACID = exports.RESOURCE_GHODIUM_OXIDE = exports.RESOURCE_GHODIUM_HYDRIDE = exports.RESOURCE_ZYNTHIUM_OXIDE = exports.RESOURCE_ZYNTHIUM_HYDRIDE = exports.RESOURCE_LEMERGIUM_OXIDE = exports.RESOURCE_LEMERGIUM_HYDRIDE = exports.RESOURCE_KEANIUM_OXIDE = exports.RESOURCE_KEANIUM_HYDRIDE = exports.RESOURCE_UTRIUM_OXIDE = exports.RESOURCE_UTRIUM_HYDRIDE = exports.RESOURCE_UTRIUM_LEMERGITE = exports.RESOURCE_ZYNTHIUM_KEANITE = exports.RESOURCE_HYDROXIDE = exports.RESOURCE_MIST = exports.RESOURCE_BIOMASS = exports.RESOURCE_METAL = exports.RESOURCE_SILICON = exports.RESOURCE_GHODIUM = exports.RESOURCE_CATALYST = exports.RESOURCE_ZYNTHIUM = exports.RESOURCE_KEANIUM = exports.RESOURCE_LEMERGIUM = exports.RESOURCE_UTRIUM = exports.RESOURCE_OXYGEN = exports.RESOURCE_HYDROGEN = exports.RESOURCE_POWER = exports.RESOURCE_ENERGY = exports.PIXEL_CPU_COST = exports.ACCESS_KEY = exports.PIXEL = exports.CPU_UNLOCK = exports.SUBSCRIPTION_TOKEN = exports.FLAGS_LIMIT = exports.MARKET_ORDER_LIFE_TIME = exports.MARKET_MAX_ORDERS = exports.MARKET_FEE = exports.ORDER_BUY = exports.ORDER_SELL = exports.PORTAL_DECAY = exports.RUIN_DECAY_STRUCTURES = exports.RUIN_DECAY = exports.TOMBSTONE_DECAY_POWER_CREEP = exports.TOMBSTONE_DECAY_PER_PART = exports.FACTORY_CAPACITY = exports.FACTORY_HITS = exports.NUKE_DAMAGE = exports.NUKE_RANGE = exports.NUKE_LAND_TIME = exports.NUKER_GHODIUM_CAPACITY = exports.NUKER_ENERGY_CAPACITY = exports.NUKER_COOLDOWN = exports.NUKER_HITS = exports.CONTAINER_DECAY_TIME_OWNED = exports.CONTAINER_DECAY_TIME = exports.CONTAINER_DECAY = exports.CONTAINER_CAPACITY = exports.CONTAINER_HITS = exports.TERMINAL_COOLDOWN = exports.TERMINAL_MIN_SEND = exports.TERMINAL_SEND_COST = exports.TERMINAL_HITS = exports.TERMINAL_CAPACITY = exports.DEPOSIT_DECAY_TIME = exports.DEPOSIT_EXHAUST_POW = exports.DEPOSIT_EXHAUST_MULTIPLY = exports.DENSITY_ULTRA = exports.DENSITY_HIGH = exports.DENSITY_MODERATE = exports.DENSITY_LOW = exports.MINERAL_DENSITY_CHANGE = exports.MINERAL_DENSITY_PROBABILITY = exports.MINERAL_DENSITY = exports.MINERAL_RANDOM_FACTOR = exports.MINERAL_MIN_AMOUNT = exports.MINERAL_REGEN_TIME = exports.MAX_CREEP_SIZE = exports.MAX_CONSTRUCTION_SITES = exports.TERRAIN_MASK_LAVA = exports.TERRAIN_MASK_SWAMP = exports.TERRAIN_MASK_WALL = exports.MODE_WORLD = exports.MODE_SIMULATION = exports.GCL_NOVICE = exports.GCL_MULTIPLY = exports.GCL_POW = exports.LAB_UNBOOST_MINERAL = exports.LAB_UNBOOST_ENERGY = exports.LAB_REACTION_AMOUNT = exports.LAB_COOLDOWN = exports.LAB_BOOST_MINERAL = exports.LAB_BOOST_ENERGY = exports.LAB_ENERGY_CAPACITY = exports.LAB_MINERAL_CAPACITY = exports.LAB_HITS = exports.EXTRACTOR_COOLDOWN = exports.EXTRACTOR_HITS = exports.POWER_SPAWN_ENERGY_RATIO = exports.POWER_SPAWN_POWER_CAPACITY = exports.POWER_SPAWN_ENERGY_CAPACITY = exports.POWER_SPAWN_HITS = exports.POWER_BANK_HIT_BACK = exports.POWER_BANK_DECAY = exports.POWER_BANK_CAPACITY_CRIT = exports.POWER_BANK_CAPACITY_MIN = exports.POWER_BANK_CAPACITY_MAX = exports.POWER_BANK_HITS = exports.OBSERVER_RANGE = exports.OBSERVER_HITS = exports.TOWER_FALLOFF = exports.TOWER_FALLOFF_RANGE = exports.TOWER_OPTIMAL_RANGE = exports.TOWER_POWER_REPAIR = exports.TOWER_POWER_HEAL = exports.TOWER_POWER_ATTACK = exports.TOWER_ENERGY_COST = exports.TOWER_CAPACITY = exports.TOWER_HITS = exports.SAFE_MODE_COST = exports.SAFE_MODE_COOLDOWN = exports.SAFE_MODE_DURATION = exports.CONTROLLER_NUKE_BLOCKED_UPGRADE = exports.CONTROLLER_ATTACK_BLOCKED_UPGRADE = exports.CONTROLLER_MAX_UPGRADE_PER_TICK = exports.CONTROLLER_RESERVE_MAX = exports.CONTROLLER_RESERVE = exports.CONTROLLER_CLAIM_DOWNGRADE = exports.CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = exports.CONTROLLER_DOWNGRADE_RESTORE = exports.CONTROLLER_DOWNGRADE = exports.CONTROLLER_STRUCTURES = exports.CONTROLLER_LEVELS = exports.CONSTRUCTION_COST_ROAD_WALL_RATIO = exports.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = exports.CONSTRUCTION_COST = exports.STRUCTURE_INVADER_CORE = exports.STRUCTURE_FACTORY = exports.STRUCTURE_NUKER = exports.STRUCTURE_CONTAINER = exports.STRUCTURE_TERMINAL = exports.STRUCTURE_LAB = exports.STRUCTURE_EXTRACTOR = exports.STRUCTURE_POWER_SPAWN = exports.STRUCTURE_POWER_BANK = exports.STRUCTURE_OBSERVER = exports.STRUCTURE_TOWER = exports.STRUCTURE_STORAGE = exports.STRUCTURE_LINK = exports.STRUCTURE_CONTROLLER = exports.STRUCTURE_PORTAL = exports.STRUCTURE_KEEPER_LAIR = exports.STRUCTURE_RAMPART = exports.STRUCTURE_WALL = exports.STRUCTURE_ROAD = exports.STRUCTURE_EXTENSION = exports.STRUCTURE_SPAWN = exports.STORAGE_HITS = exports.STORAGE_CAPACITY = exports.LINK_LOSS_RATIO = exports.LINK_COOLDOWN = exports.LINK_CAPACITY = exports.LINK_HITS_MAX = exports.LINK_HITS = exports.ROAD_DECAY_TIME = exports.ROAD_DECAY_AMOUNT = exports.ROAD_WEAROUT_POWER_CREEP = exports.ROAD_WEAROUT = exports.ROAD_HITS = exports.EXTENSION_ENERGY_CAPACITY = exports.EXTENSION_HITS = exports.WALL_HITS_MAX = exports.WALL_HITS = exports.SOURCE_ENERGY_KEEPER_CAPACITY = exports.SOURCE_ENERGY_NEUTRAL_CAPACITY = exports.SOURCE_ENERGY_CAPACITY = exports.SPAWN_RENEW_RATIO = exports.CREEP_SPAWN_TIME = exports.SPAWN_ENERGY_CAPACITY = exports.SPAWN_ENERGY_START = exports.SPAWN_HITS = exports.ENERGY_DECAY = exports.ENERGY_REGEN_TIME = exports.RAMPART_HITS_MAX = exports.RAMPART_HITS = exports.RAMPART_DECAY_TIME = exports.RAMPART_DECAY_AMOUNT = exports.DISMANTLE_COST = exports.REPAIR_COST = exports.RANGED_HEAL_POWER = exports.HEAL_POWER = exports.RANGED_ATTACK_POWER = exports.UPGRADE_CONTROLLER_POWER = exports.ATTACK_POWER = exports.BUILD_POWER = exports.DISMANTLE_POWER = exports.REPAIR_POWER = exports.HARVEST_DEPOSIT_POWER = exports.HARVEST_MINERAL_POWER = exports.HARVEST_POWER = exports.CARRY_CAPACITY = exports.CREEP_PART_MAX_ENERGY = exports.CREEP_CORPSE_RATE = exports.CREEP_CLAIM_LIFE_TIME = exports.CREEP_LIFE_TIME = exports.WORLD_HEIGHT = exports.WORLD_WIDTH = exports.BODYPART_COST = exports.CLAIM = exports.HEAL = exports.TOUGH = exports.RANGED_ATTACK = exports.ATTACK = exports.CARRY = exports.WORK = exports.MOVE = exports.OBSTACLE_OBJECT_TYPES = exports.LOOK_RUINS = exports.LOOK_POWER_CREEPS = exports.LOOK_TOMBSTONES = exports.LOOK_TERRAIN = exports.LOOK_NUKES = exports.LOOK_CONSTRUCTION_SITES = exports.LOOK_FLAGS = exports.LOOK_STRUCTURES = exports.LOOK_DEPOSITS = exports.LOOK_MINERALS = exports.LOOK_SOURCES = exports.LOOK_RESOURCES = exports.LOOK_ENERGY = exports.LOOK_CREEPS = exports.COLOR_WHITE = exports.COLOR_GREY = exports.COLOR_BROWN = exports.COLOR_ORANGE = exports.COLOR_YELLOW = exports.COLOR_GREEN = exports.COLOR_CYAN = exports.COLOR_BLUE = exports.COLOR_PURPLE = exports.COLOR_RED = exports.TOP_LEFT = exports.LEFT = exports.BOTTOM_LEFT = exports.BOTTOM = exports.BOTTOM_RIGHT = exports.RIGHT = exports.TOP_RIGHT = exports.TOP = exports.FIND_RUINS = exports.FIND_DEPOSITS = exports.FIND_HOSTILE_POWER_CREEPS = exports.FIND_MY_POWER_CREEPS = exports.FIND_POWER_CREEPS = exports.FIND_TOMBSTONES = exports.FIND_NUKES = exports.FIND_MINERALS = exports.FIND_HOSTILE_CONSTRUCTION_SITES = exports.FIND_MY_CONSTRUCTION_SITES = exports.FIND_HOSTILE_SPAWNS = exports.FIND_MY_SPAWNS = exports.FIND_CONSTRUCTION_SITES = exports.FIND_FLAGS = exports.FIND_HOSTILE_STRUCTURES = exports.FIND_MY_STRUCTURES = exports.FIND_STRUCTURES = exports.FIND_DROPPED_RESOURCES = exports.FIND_SOURCES = exports.FIND_SOURCES_ACTIVE = exports.FIND_HOSTILE_CREEPS = exports.FIND_MY_CREEPS = exports.FIND_CREEPS = exports.FIND_EXIT = exports.FIND_EXIT_LEFT = exports.FIND_EXIT_BOTTOM = exports.FIND_EXIT_RIGHT = exports.FIND_EXIT_TOP = exports.ERR_GCL_NOT_ENOUGH = exports.ERR_RCL_NOT_ENOUGH = exports.ERR_NOT_ENOUGH_EXTENSIONS = exports.ERR_NO_BODYPART = exports.ERR_TIRED = exports.ERR_INVALID_ARGS = exports.ERR_NOT_IN_RANGE = exports.ERR_FULL = exports.ERR_INVALID_TARGET = exports.ERR_NOT_ENOUGH_RESOURCES = exports.ERR_NOT_ENOUGH_ENERGY = exports.ERR_NOT_FOUND = exports.ERR_BUSY = exports.ERR_NAME_EXISTS = exports.ERR_NO_PATH = exports.ERR_NOT_OWNER = exports.OK = void 0;
exports.OK = 0, exports.ERR_NOT_OWNER = -1, exports.ERR_NO_PATH = -2, exports.ERR_NAME_EXISTS = -3, exports.ERR_BUSY = -4, exports.ERR_NOT_FOUND = -5, exports.ERR_NOT_ENOUGH_ENERGY = -6, exports.ERR_NOT_ENOUGH_RESOURCES = -6, exports.ERR_INVALID_TARGET = -7, exports.ERR_FULL = -8, exports.ERR_NOT_IN_RANGE = -9, exports.ERR_INVALID_ARGS = -10, exports.ERR_TIRED = -11, exports.ERR_NO_BODYPART = -12, exports.ERR_NOT_ENOUGH_EXTENSIONS = -6, exports.ERR_RCL_NOT_ENOUGH = -14, exports.ERR_GCL_NOT_ENOUGH = -15, exports.FIND_EXIT_TOP = 1, exports.FIND_EXIT_RIGHT = 3, exports.FIND_EXIT_BOTTOM = 5, exports.FIND_EXIT_LEFT = 7, exports.FIND_EXIT = 10, exports.FIND_CREEPS = 101, exports.FIND_MY_CREEPS = 102, exports.FIND_HOSTILE_CREEPS = 103, exports.FIND_SOURCES_ACTIVE = 104, exports.FIND_SOURCES = 105, exports.FIND_DROPPED_RESOURCES = 106, exports.FIND_STRUCTURES = 107, exports.FIND_MY_STRUCTURES = 108, exports.FIND_HOSTILE_STRUCTURES = 109, exports.FIND_FLAGS = 110, exports.FIND_CONSTRUCTION_SITES = 111, exports.FIND_MY_SPAWNS = 112, exports.FIND_HOSTILE_SPAWNS = 113, exports.FIND_MY_CONSTRUCTION_SITES = 114, exports.FIND_HOSTILE_CONSTRUCTION_SITES = 115, exports.FIND_MINERALS = 116, exports.FIND_NUKES = 117, exports.FIND_TOMBSTONES = 118, exports.FIND_POWER_CREEPS = 119, exports.FIND_MY_POWER_CREEPS = 120, exports.FIND_HOSTILE_POWER_CREEPS = 121, exports.FIND_DEPOSITS = 122, exports.FIND_RUINS = 123, exports.TOP = 1, exports.TOP_RIGHT = 2, exports.RIGHT = 3, exports.BOTTOM_RIGHT = 4, exports.BOTTOM = 5, exports.BOTTOM_LEFT = 6, exports.LEFT = 7, exports.TOP_LEFT = 8, exports.COLOR_RED = 1, exports.COLOR_PURPLE = 2, exports.COLOR_BLUE = 3, exports.COLOR_CYAN = 4, exports.COLOR_GREEN = 5, exports.COLOR_YELLOW = 6, exports.COLOR_ORANGE = 7, exports.COLOR_BROWN = 8, exports.COLOR_GREY = 9, exports.COLOR_WHITE = 10, exports.LOOK_CREEPS = 'creep', exports.LOOK_ENERGY = 'energy', exports.LOOK_RESOURCES = 'resource', exports.LOOK_SOURCES = 'source', exports.LOOK_MINERALS = 'mineral', exports.LOOK_DEPOSITS = 'deposit', exports.LOOK_STRUCTURES = 'structure', exports.LOOK_FLAGS = 'flag', exports.LOOK_CONSTRUCTION_SITES = 'constructionSite', exports.LOOK_NUKES = 'nuke', exports.LOOK_TERRAIN = 'terrain', exports.LOOK_TOMBSTONES = 'tombstone', exports.LOOK_POWER_CREEPS = 'powerCreep', exports.LOOK_RUINS = 'ruin', exports.OBSTACLE_OBJECT_TYPES = ['spawn', 'creep', 'powerCreep', 'source', 'mineral', 'deposit', 'controller', 'constructedWall', 'extension', 'link', 'storage', 'tower', 'observer', 'powerSpawn', 'powerBank', 'lab', 'terminal', 'nuker', 'factory', 'invaderCore'], exports.MOVE = 'move', exports.WORK = 'work', exports.CARRY = 'carry', exports.ATTACK = 'attack', exports.RANGED_ATTACK = 'ranged_attack', exports.TOUGH = 'tough', exports.HEAL = 'heal', exports.CLAIM = 'claim', exports.BODYPART_COST = {
    move: 50,
    work: 100,
    attack: 80,
    carry: 50,
    heal: 250,
    ranged_attack: 150,
    tough: 10,
    claim: 600
}, exports.WORLD_WIDTH = 202, exports.WORLD_HEIGHT = 202, exports.CREEP_LIFE_TIME = 1500, exports.CREEP_CLAIM_LIFE_TIME = 600, exports.CREEP_CORPSE_RATE = 0.2, exports.CREEP_PART_MAX_ENERGY = 125, exports.CARRY_CAPACITY = 50, exports.HARVEST_POWER = 2, exports.HARVEST_MINERAL_POWER = 1, exports.HARVEST_DEPOSIT_POWER = 1, exports.REPAIR_POWER = 100, exports.DISMANTLE_POWER = 50, exports.BUILD_POWER = 5, exports.ATTACK_POWER = 30, exports.UPGRADE_CONTROLLER_POWER = 1, exports.RANGED_ATTACK_POWER = 10, exports.HEAL_POWER = 12, exports.RANGED_HEAL_POWER = 4, exports.REPAIR_COST = 0.01, exports.DISMANTLE_COST = 0.005, exports.RAMPART_DECAY_AMOUNT = 300, exports.RAMPART_DECAY_TIME = 100, exports.RAMPART_HITS = 1, exports.RAMPART_HITS_MAX = { 2: 300000, 3: 1000000, 4: 3000000, 5: 10000000, 6: 30000000, 7: 100000000, 8: 300000000 }, exports.ENERGY_REGEN_TIME = 300, exports.ENERGY_DECAY = 1000, exports.SPAWN_HITS = 5000, exports.SPAWN_ENERGY_START = 300, exports.SPAWN_ENERGY_CAPACITY = 300, exports.CREEP_SPAWN_TIME = 3, exports.SPAWN_RENEW_RATIO = 1.2, exports.SOURCE_ENERGY_CAPACITY = 3000, exports.SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500, exports.SOURCE_ENERGY_KEEPER_CAPACITY = 4000, exports.WALL_HITS = 1, exports.WALL_HITS_MAX = 300000000, exports.EXTENSION_HITS = 1000, exports.EXTENSION_ENERGY_CAPACITY = { 0: 50, 1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 100, 8: 200 }, exports.ROAD_HITS = 5000, exports.ROAD_WEAROUT = 1, exports.ROAD_WEAROUT_POWER_CREEP = 100, exports.ROAD_DECAY_AMOUNT = 100, exports.ROAD_DECAY_TIME = 1000, exports.LINK_HITS = 1000, exports.LINK_HITS_MAX = 1000, exports.LINK_CAPACITY = 800, exports.LINK_COOLDOWN = 1, exports.LINK_LOSS_RATIO = 0.03, exports.STORAGE_CAPACITY = 1000000, exports.STORAGE_HITS = 10000, exports.STRUCTURE_SPAWN = 'spawn', exports.STRUCTURE_EXTENSION = 'extension', exports.STRUCTURE_ROAD = 'road', exports.STRUCTURE_WALL = 'constructedWall', exports.STRUCTURE_RAMPART = 'rampart', exports.STRUCTURE_KEEPER_LAIR = 'keeperLair', exports.STRUCTURE_PORTAL = 'portal', exports.STRUCTURE_CONTROLLER = 'controller', exports.STRUCTURE_LINK = 'link', exports.STRUCTURE_STORAGE = 'storage', exports.STRUCTURE_TOWER = 'tower', exports.STRUCTURE_OBSERVER = 'observer', exports.STRUCTURE_POWER_BANK = 'powerBank', exports.STRUCTURE_POWER_SPAWN = 'powerSpawn', exports.STRUCTURE_EXTRACTOR = 'extractor', exports.STRUCTURE_LAB = 'lab', exports.STRUCTURE_TERMINAL = 'terminal', exports.STRUCTURE_CONTAINER = 'container', exports.STRUCTURE_NUKER = 'nuker', exports.STRUCTURE_FACTORY = 'factory', exports.STRUCTURE_INVADER_CORE = 'invaderCore', exports.CONSTRUCTION_COST = {
    spawn: 15000,
    extension: 3000,
    road: 300,
    constructedWall: 1,
    rampart: 1,
    link: 5000,
    storage: 30000,
    tower: 5000,
    observer: 8000,
    powerSpawn: 100000,
    extractor: 5000,
    lab: 50000,
    terminal: 100000,
    container: 5000,
    nuker: 100000,
    factory: 100000
}, exports.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5, exports.CONSTRUCTION_COST_ROAD_WALL_RATIO = 150, exports.CONTROLLER_LEVELS = { 1: 200, 2: 45000, 3: 135000, 4: 405000, 5: 1215000, 6: 3645000, 7: 10935000 }, exports.CONTROLLER_STRUCTURES = {
    spawn: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3 },
    extension: { 0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60 },
    link: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6 },
    road: { 0: 2500, 1: 2500, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    constructedWall: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    rampart: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    storage: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 },
    tower: { 1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 6 },
    observer: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
    powerSpawn: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
    extractor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1 },
    terminal: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1 },
    lab: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 3, 7: 6, 8: 10 },
    container: { 0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5 },
    nuker: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
    factory: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 1, 8: 1 }
}, exports.CONTROLLER_DOWNGRADE = { 1: 20000, 2: 10000, 3: 20000, 4: 40000, 5: 80000, 6: 120000, 7: 150000, 8: 200000 }, exports.CONTROLLER_DOWNGRADE_RESTORE = 100, exports.CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = 5000, exports.CONTROLLER_CLAIM_DOWNGRADE = 300, exports.CONTROLLER_RESERVE = 1, exports.CONTROLLER_RESERVE_MAX = 5000, exports.CONTROLLER_MAX_UPGRADE_PER_TICK = 15, exports.CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000, exports.CONTROLLER_NUKE_BLOCKED_UPGRADE = 200, exports.SAFE_MODE_DURATION = 20000, exports.SAFE_MODE_COOLDOWN = 50000, exports.SAFE_MODE_COST = 1000, exports.TOWER_HITS = 3000, exports.TOWER_CAPACITY = 1000, exports.TOWER_ENERGY_COST = 10, exports.TOWER_POWER_ATTACK = 600, exports.TOWER_POWER_HEAL = 400, exports.TOWER_POWER_REPAIR = 800, exports.TOWER_OPTIMAL_RANGE = 5, exports.TOWER_FALLOFF_RANGE = 20, exports.TOWER_FALLOFF = 0.75, exports.OBSERVER_HITS = 500, exports.OBSERVER_RANGE = 10, exports.POWER_BANK_HITS = 2000000, exports.POWER_BANK_CAPACITY_MAX = 5000, exports.POWER_BANK_CAPACITY_MIN = 500, exports.POWER_BANK_CAPACITY_CRIT = 0.3, exports.POWER_BANK_DECAY = 5000, exports.POWER_BANK_HIT_BACK = 0.5, exports.POWER_SPAWN_HITS = 5000, exports.POWER_SPAWN_ENERGY_CAPACITY = 5000, exports.POWER_SPAWN_POWER_CAPACITY = 100, exports.POWER_SPAWN_ENERGY_RATIO = 50, exports.EXTRACTOR_HITS = 500, exports.EXTRACTOR_COOLDOWN = 5, exports.LAB_HITS = 500, exports.LAB_MINERAL_CAPACITY = 3000, exports.LAB_ENERGY_CAPACITY = 2000, exports.LAB_BOOST_ENERGY = 20, exports.LAB_BOOST_MINERAL = 30, exports.LAB_COOLDOWN = 10, exports.LAB_REACTION_AMOUNT = 5, exports.LAB_UNBOOST_ENERGY = 0, exports.LAB_UNBOOST_MINERAL = 15, exports.GCL_POW = 2.4, exports.GCL_MULTIPLY = 1000000, exports.GCL_NOVICE = 3, exports.MODE_SIMULATION = null, exports.MODE_WORLD = null, exports.TERRAIN_MASK_WALL = 1, exports.TERRAIN_MASK_SWAMP = 2, exports.TERRAIN_MASK_LAVA = 4, exports.MAX_CONSTRUCTION_SITES = 100, exports.MAX_CREEP_SIZE = 50, exports.MINERAL_REGEN_TIME = 50000, exports.MINERAL_MIN_AMOUNT = {
    'H': 35000,
    'O': 35000,
    'L': 35000,
    'K': 35000,
    'Z': 35000,
    'U': 35000,
    'X': 35000
}, exports.MINERAL_RANDOM_FACTOR = 2, exports.MINERAL_DENSITY = {
    1: 15000,
    2: 35000,
    3: 70000,
    4: 100000
}, exports.MINERAL_DENSITY_PROBABILITY = {
    1: 0.1,
    2: 0.5,
    3: 0.9,
    4: 1.0
}, exports.MINERAL_DENSITY_CHANGE = 0.05, exports.DENSITY_LOW = 1, exports.DENSITY_MODERATE = 2, exports.DENSITY_HIGH = 3, exports.DENSITY_ULTRA = 4, exports.DEPOSIT_EXHAUST_MULTIPLY = 0.001, exports.DEPOSIT_EXHAUST_POW = 1.2, exports.DEPOSIT_DECAY_TIME = 50000, exports.TERMINAL_CAPACITY = 300000, exports.TERMINAL_HITS = 3000, exports.TERMINAL_SEND_COST = 0.1, exports.TERMINAL_MIN_SEND = 100, exports.TERMINAL_COOLDOWN = 10, exports.CONTAINER_HITS = 250000, exports.CONTAINER_CAPACITY = 2000, exports.CONTAINER_DECAY = 5000, exports.CONTAINER_DECAY_TIME = 100, exports.CONTAINER_DECAY_TIME_OWNED = 500, exports.NUKER_HITS = 1000, exports.NUKER_COOLDOWN = 100000, exports.NUKER_ENERGY_CAPACITY = 300000, exports.NUKER_GHODIUM_CAPACITY = 5000, exports.NUKE_LAND_TIME = 50000, exports.NUKE_RANGE = 10, exports.NUKE_DAMAGE = {
    0: 10000000,
    2: 5000000
}, exports.FACTORY_HITS = 1000, exports.FACTORY_CAPACITY = 50000, exports.TOMBSTONE_DECAY_PER_PART = 5, exports.TOMBSTONE_DECAY_POWER_CREEP = 500, exports.RUIN_DECAY = 500, exports.RUIN_DECAY_STRUCTURES = {
    powerBank: 10
}, exports.PORTAL_DECAY = 30000, exports.ORDER_SELL = 'sell', exports.ORDER_BUY = 'buy', exports.MARKET_FEE = 0.05, exports.MARKET_MAX_ORDERS = 300, exports.MARKET_ORDER_LIFE_TIME = 2592000000, exports.FLAGS_LIMIT = 10000, exports.SUBSCRIPTION_TOKEN = 'token', exports.CPU_UNLOCK = 'cpuUnlock', exports.PIXEL = 'pixel', exports.ACCESS_KEY = 'accessKey', exports.PIXEL_CPU_COST = 5000, exports.RESOURCE_ENERGY = 'energy', exports.RESOURCE_POWER = 'power', exports.RESOURCE_HYDROGEN = 'H', exports.RESOURCE_OXYGEN = 'O', exports.RESOURCE_UTRIUM = 'U', exports.RESOURCE_LEMERGIUM = 'L', exports.RESOURCE_KEANIUM = 'K', exports.RESOURCE_ZYNTHIUM = 'Z', exports.RESOURCE_CATALYST = 'X', exports.RESOURCE_GHODIUM = 'G', exports.RESOURCE_SILICON = 'silicon', exports.RESOURCE_METAL = 'metal', exports.RESOURCE_BIOMASS = 'biomass', exports.RESOURCE_MIST = 'mist', exports.RESOURCE_HYDROXIDE = 'OH', exports.RESOURCE_ZYNTHIUM_KEANITE = 'ZK', exports.RESOURCE_UTRIUM_LEMERGITE = 'UL', exports.RESOURCE_UTRIUM_HYDRIDE = 'UH', exports.RESOURCE_UTRIUM_OXIDE = 'UO', exports.RESOURCE_KEANIUM_HYDRIDE = 'KH', exports.RESOURCE_KEANIUM_OXIDE = 'KO', exports.RESOURCE_LEMERGIUM_HYDRIDE = 'LH', exports.RESOURCE_LEMERGIUM_OXIDE = 'LO', exports.RESOURCE_ZYNTHIUM_HYDRIDE = 'ZH', exports.RESOURCE_ZYNTHIUM_OXIDE = 'ZO', exports.RESOURCE_GHODIUM_HYDRIDE = 'GH', exports.RESOURCE_GHODIUM_OXIDE = 'GO', exports.RESOURCE_UTRIUM_ACID = 'UH2O', exports.RESOURCE_UTRIUM_ALKALIDE = 'UHO2', exports.RESOURCE_KEANIUM_ACID = 'KH2O', exports.RESOURCE_KEANIUM_ALKALIDE = 'KHO2', exports.RESOURCE_LEMERGIUM_ACID = 'LH2O', exports.RESOURCE_LEMERGIUM_ALKALIDE = 'LHO2', exports.RESOURCE_ZYNTHIUM_ACID = 'ZH2O', exports.RESOURCE_ZYNTHIUM_ALKALIDE = 'ZHO2', exports.RESOURCE_GHODIUM_ACID = 'GH2O', exports.RESOURCE_GHODIUM_ALKALIDE = 'GHO2', exports.RESOURCE_CATALYZED_UTRIUM_ACID = 'XUH2O', exports.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = 'XUHO2', exports.RESOURCE_CATALYZED_KEANIUM_ACID = 'XKH2O', exports.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = 'XKHO2', exports.RESOURCE_CATALYZED_LEMERGIUM_ACID = 'XLH2O', exports.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = 'XLHO2', exports.RESOURCE_CATALYZED_ZYNTHIUM_ACID = 'XZH2O', exports.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = 'XZHO2', exports.RESOURCE_CATALYZED_GHODIUM_ACID = 'XGH2O', exports.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = 'XGHO2', exports.RESOURCE_OPS = 'ops', exports.RESOURCE_UTRIUM_BAR = 'utrium_bar', exports.RESOURCE_LEMERGIUM_BAR = 'lemergium_bar', exports.RESOURCE_ZYNTHIUM_BAR = 'zynthium_bar', exports.RESOURCE_KEANIUM_BAR = 'keanium_bar', exports.RESOURCE_GHODIUM_MELT = 'ghodium_melt', exports.RESOURCE_OXIDANT = 'oxidant', exports.RESOURCE_REDUCTANT = 'reductant', exports.RESOURCE_PURIFIER = 'purifier', exports.RESOURCE_BATTERY = 'battery', exports.RESOURCE_COMPOSITE = 'composite', exports.RESOURCE_CRYSTAL = 'crystal', exports.RESOURCE_LIQUID = 'liquid', exports.RESOURCE_WIRE = 'wire', exports.RESOURCE_SWITCH = 'switch', exports.RESOURCE_TRANSISTOR = 'transistor', exports.RESOURCE_MICROCHIP = 'microchip', exports.RESOURCE_CIRCUIT = 'circuit', exports.RESOURCE_DEVICE = 'device', exports.RESOURCE_CELL = 'cell', exports.RESOURCE_PHLEGM = 'phlegm', exports.RESOURCE_TISSUE = 'tissue', exports.RESOURCE_MUSCLE = 'muscle', exports.RESOURCE_ORGANOID = 'organoid', exports.RESOURCE_ORGANISM = 'organism', exports.RESOURCE_ALLOY = 'alloy', exports.RESOURCE_TUBE = 'tube', exports.RESOURCE_FIXTURES = 'fixtures', exports.RESOURCE_FRAME = 'frame', exports.RESOURCE_HYDRAULICS = 'hydraulics', exports.RESOURCE_MACHINE = 'machine', exports.RESOURCE_CONDENSATE = 'condensate', exports.RESOURCE_CONCENTRATE = 'concentrate', exports.RESOURCE_EXTRACT = 'extract', exports.RESOURCE_SPIRIT = 'spirit', exports.RESOURCE_EMANATION = 'emanation', exports.RESOURCE_ESSENCE = 'essence', exports.REACTIONS = {
    H: {
        O: 'OH',
        L: 'LH',
        K: 'KH',
        U: 'UH',
        Z: 'ZH',
        G: 'GH'
    },
    O: {
        H: 'OH',
        L: 'LO',
        K: 'KO',
        U: 'UO',
        Z: 'ZO',
        G: 'GO'
    },
    Z: {
        K: 'ZK',
        H: 'ZH',
        O: 'ZO'
    },
    L: {
        U: 'UL',
        H: 'LH',
        O: 'LO'
    },
    K: {
        Z: 'ZK',
        H: 'KH',
        O: 'KO'
    },
    G: {
        H: 'GH',
        O: 'GO'
    },
    U: {
        L: 'UL',
        H: 'UH',
        O: 'UO'
    },
    OH: {
        UH: 'UH2O',
        UO: 'UHO2',
        ZH: 'ZH2O',
        ZO: 'ZHO2',
        KH: 'KH2O',
        KO: 'KHO2',
        LH: 'LH2O',
        LO: 'LHO2',
        GH: 'GH2O',
        GO: 'GHO2'
    },
    X: {
        UH2O: 'XUH2O',
        UHO2: 'XUHO2',
        LH2O: 'XLH2O',
        LHO2: 'XLHO2',
        KH2O: 'XKH2O',
        KHO2: 'XKHO2',
        ZH2O: 'XZH2O',
        ZHO2: 'XZHO2',
        GH2O: 'XGH2O',
        GHO2: 'XGHO2'
    },
    ZK: {
        UL: 'G'
    },
    UL: {
        ZK: 'G'
    },
    LH: {
        OH: 'LH2O'
    },
    ZH: {
        OH: 'ZH2O'
    },
    GH: {
        OH: 'GH2O'
    },
    KH: {
        OH: 'KH2O'
    },
    UH: {
        OH: 'UH2O'
    },
    LO: {
        OH: 'LHO2'
    },
    ZO: {
        OH: 'ZHO2'
    },
    KO: {
        OH: 'KHO2'
    },
    UO: {
        OH: 'UHO2'
    },
    GO: {
        OH: 'GHO2'
    },
    LH2O: {
        X: 'XLH2O'
    },
    KH2O: {
        X: 'XKH2O'
    },
    ZH2O: {
        X: 'XZH2O'
    },
    UH2O: {
        X: 'XUH2O'
    },
    GH2O: {
        X: 'XGH2O'
    },
    LHO2: {
        X: 'XLHO2'
    },
    UHO2: {
        X: 'XUHO2'
    },
    KHO2: {
        X: 'XKHO2'
    },
    ZHO2: {
        X: 'XZHO2'
    },
    GHO2: {
        X: 'XGHO2'
    }
}, exports.BOOSTS = {
    work: {
        UO: {
            harvest: 3
        },
        UHO2: {
            harvest: 5
        },
        XUHO2: {
            harvest: 7
        },
        LH: {
            build: 1.5,
            repair: 1.5
        },
        LH2O: {
            build: 1.8,
            repair: 1.8
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.5
        },
        GH2O: {
            upgradeController: 1.8
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
}, exports.REACTION_TIME = {
    OH: 20,
    ZK: 5,
    UL: 5,
    G: 5,
    UH: 10,
    UH2O: 5,
    XUH2O: 60,
    UO: 10,
    UHO2: 5,
    XUHO2: 60,
    KH: 10,
    KH2O: 5,
    XKH2O: 60,
    KO: 10,
    KHO2: 5,
    XKHO2: 60,
    LH: 15,
    LH2O: 10,
    XLH2O: 65,
    LO: 10,
    LHO2: 5,
    XLHO2: 60,
    ZH: 20,
    ZH2O: 40,
    XZH2O: 160,
    ZO: 10,
    ZHO2: 5,
    XZHO2: 60,
    GH: 10,
    GH2O: 15,
    XGH2O: 80,
    GO: 10,
    GHO2: 30,
    XGHO2: 150,
}, exports.PORTAL_UNSTABLE = 864000000, exports.PORTAL_MIN_TIMEOUT = 1036800000, exports.PORTAL_MAX_TIMEOUT = 1900800000, exports.POWER_BANK_RESPAWN_TIME = 50000, exports.INVADERS_ENERGY_GOAL = 100000, exports.SYSTEM_USERNAME = 'Screeps', exports.SIGN_NOVICE_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.', exports.SIGN_RESPAWN_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.', exports.SIGN_PLANNED_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.', exports.EVENT_ATTACK = 1, exports.EVENT_OBJECT_DESTROYED = 2, exports.EVENT_ATTACK_CONTROLLER = 3, exports.EVENT_BUILD = 4, exports.EVENT_HARVEST = 5, exports.EVENT_HEAL = 6, exports.EVENT_REPAIR = 7, exports.EVENT_RESERVE_CONTROLLER = 8, exports.EVENT_UPGRADE_CONTROLLER = 9, exports.EVENT_EXIT = 10, exports.EVENT_POWER = 11, exports.EVENT_TRANSFER = 12, exports.EVENT_ATTACK_TYPE_MELEE = 1, exports.EVENT_ATTACK_TYPE_RANGED = 2, exports.EVENT_ATTACK_TYPE_RANGED_MASS = 3, exports.EVENT_ATTACK_TYPE_DISMANTLE = 4, exports.EVENT_ATTACK_TYPE_HIT_BACK = 5, exports.EVENT_ATTACK_TYPE_NUKE = 6, exports.EVENT_HEAL_TYPE_MELEE = 1, exports.EVENT_HEAL_TYPE_RANGED = 2, exports.POWER_LEVEL_MULTIPLY = 1000, exports.POWER_LEVEL_POW = 2, exports.POWER_CREEP_SPAWN_COOLDOWN = 28800000, exports.POWER_CREEP_DELETE_COOLDOWN = 86400000, exports.POWER_CREEP_MAX_LEVEL = 25, exports.POWER_CREEP_LIFE_TIME = 5000, exports.POWER_CLASS = {
    OPERATOR: 'operator'
}, exports.PWR_GENERATE_OPS = 1, exports.PWR_OPERATE_SPAWN = 2, exports.PWR_OPERATE_TOWER = 3, exports.PWR_OPERATE_STORAGE = 4, exports.PWR_OPERATE_LAB = 5, exports.PWR_OPERATE_EXTENSION = 6, exports.PWR_OPERATE_OBSERVER = 7, exports.PWR_OPERATE_TERMINAL = 8, exports.PWR_DISRUPT_SPAWN = 9, exports.PWR_DISRUPT_TOWER = 10, exports.PWR_DISRUPT_SOURCE = 11, exports.PWR_SHIELD = 12, exports.PWR_REGEN_SOURCE = 13, exports.PWR_REGEN_MINERAL = 14, exports.PWR_DISRUPT_TERMINAL = 15, exports.PWR_OPERATE_POWER = 16, exports.PWR_FORTIFY = 17, exports.PWR_OPERATE_CONTROLLER = 18, exports.PWR_OPERATE_FACTORY = 19, exports.EFFECT_INVULNERABILITY = 1001, exports.EFFECT_COLLAPSE_TIMER = 1002, exports.INVADER_CORE_HITS = 100000, exports.INVADER_CORE_CREEP_SPAWN_TIME = {
    0: 0, 1: 0, 2: 6, 3: 3, 4: 2, 5: 1
}, exports.INVADER_CORE_EXPAND_TIME = { 1: 4000, 2: 3500, 3: 3000, 4: 2500, 5: 2000 }, exports.INVADER_CORE_CONTROLLER_POWER = 2, exports.INVADER_CORE_CONTROLLER_DOWNGRADE = 5000, exports.STRONGHOLD_RAMPART_HITS = { 0: 0, 1: 100000, 2: 200000, 3: 500000, 4: 1000000, 5: 2000000 }, exports.STRONGHOLD_DECAY_TICKS = 75000;
exports.OWER_INFO = {
    [exports.PWR_GENERATE_OPS]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        effect: [1, 2, 4, 6, 8]
    },
    [exports.PWR_OPERATE_SPAWN]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 300,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [0.9, 0.7, 0.5, 0.35, 0.2]
    },
    [exports.PWR_OPERATE_TOWER]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 10,
        duration: 100,
        range: 3,
        ops: 10,
        effect: [1.1, 1.2, 1.3, 1.4, 1.5]
    },
    [exports.PWR_OPERATE_STORAGE]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 800,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [500000, 1000000, 2000000, 4000000, 7000000]
    },
    [exports.PWR_OPERATE_LAB]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        duration: 1000,
        range: 3,
        ops: 10,
        effect: [2, 4, 6, 8, 10]
    },
    [exports.PWR_OPERATE_EXTENSION]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        range: 3,
        ops: 2,
        effect: [0.2, 0.4, 0.6, 0.8, 1.0]
    },
    [exports.PWR_OPERATE_OBSERVER]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 400,
        duration: [200, 400, 600, 800, 1000],
        range: 3,
        ops: 10,
    },
    [exports.PWR_OPERATE_TERMINAL]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 500,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [0.9, 0.8, 0.7, 0.6, 0.5]
    },
    [exports.PWR_DISRUPT_SPAWN]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 5,
        range: 20,
        ops: 10,
        duration: [1, 2, 3, 4, 5]
    },
    [exports.PWR_DISRUPT_TOWER]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 0,
        duration: 5,
        range: 50,
        ops: 10,
        effect: [0.9, 0.8, 0.7, 0.6, 0.5],
    },
    [exports.PWR_DISRUPT_SOURCE]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 100,
        range: 3,
        ops: 100,
        duration: [100, 200, 300, 400, 500]
    },
    [exports.PWR_SHIELD]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        effect: [5000, 10000, 15000, 20000, 25000],
        duration: 50,
        cooldown: 20,
        energy: 100,
    },
    [exports.PWR_REGEN_SOURCE]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 100,
        duration: 300,
        range: 3,
        effect: [50, 100, 150, 200, 250],
        period: 15
    },
    [exports.PWR_REGEN_MINERAL]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 100,
        duration: 100,
        range: 3,
        effect: [2, 4, 6, 8, 10],
        period: 10
    },
    [exports.PWR_DISRUPT_TERMINAL]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [20, 21, 22, 23, 24],
        cooldown: 8,
        duration: 10,
        range: 50,
        ops: [50, 40, 30, 20, 10]
    },
    [exports.PWR_FORTIFY]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 5,
        range: 3,
        ops: 5,
        duration: [1, 2, 3, 4, 5]
    },
    [exports.PWR_OPERATE_POWER]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 200,
        effect: [1, 2, 3, 4, 5]
    },
    [exports.PWR_OPERATE_CONTROLLER]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [20, 21, 22, 23, 24],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 200,
        effect: [10, 20, 30, 40, 50]
    },
    [exports.PWR_OPERATE_FACTORY]: {
        className: exports.POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 100
    },
}, exports.BODYPARTS_ALL = [
    exports.MOVE,
    exports.WORK,
    exports.CARRY,
    exports.ATTACK,
    exports.RANGED_ATTACK,
    exports.TOUGH,
    exports.HEAL,
    exports.CLAIM
], exports.RESOURCES_ALL = [
    exports.RESOURCE_ENERGY,
    exports.RESOURCE_POWER,
    exports.RESOURCE_HYDROGEN,
    exports.RESOURCE_OXYGEN,
    exports.RESOURCE_UTRIUM,
    exports.RESOURCE_KEANIUM,
    exports.RESOURCE_LEMERGIUM,
    exports.RESOURCE_ZYNTHIUM,
    exports.RESOURCE_CATALYST,
    exports.RESOURCE_GHODIUM,
    exports.RESOURCE_HYDROXIDE,
    exports.RESOURCE_ZYNTHIUM_KEANITE,
    exports.RESOURCE_UTRIUM_LEMERGITE,
    exports.RESOURCE_UTRIUM_HYDRIDE,
    exports.RESOURCE_UTRIUM_OXIDE,
    exports.RESOURCE_KEANIUM_HYDRIDE,
    exports.RESOURCE_KEANIUM_OXIDE,
    exports.RESOURCE_LEMERGIUM_HYDRIDE,
    exports.RESOURCE_LEMERGIUM_OXIDE,
    exports.RESOURCE_ZYNTHIUM_HYDRIDE,
    exports.RESOURCE_ZYNTHIUM_OXIDE,
    exports.RESOURCE_GHODIUM_HYDRIDE,
    exports.RESOURCE_GHODIUM_OXIDE,
    exports.RESOURCE_UTRIUM_ACID,
    exports.RESOURCE_UTRIUM_ALKALIDE,
    exports.RESOURCE_KEANIUM_ACID,
    exports.RESOURCE_KEANIUM_ALKALIDE,
    exports.RESOURCE_LEMERGIUM_ACID,
    exports.RESOURCE_LEMERGIUM_ALKALIDE,
    exports.RESOURCE_ZYNTHIUM_ACID,
    exports.RESOURCE_ZYNTHIUM_ALKALIDE,
    exports.RESOURCE_GHODIUM_ACID,
    exports.RESOURCE_GHODIUM_ALKALIDE,
    exports.RESOURCE_CATALYZED_UTRIUM_ACID,
    exports.RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
    exports.RESOURCE_CATALYZED_KEANIUM_ACID,
    exports.RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    exports.RESOURCE_CATALYZED_LEMERGIUM_ACID,
    exports.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    exports.RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    exports.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    exports.RESOURCE_CATALYZED_GHODIUM_ACID,
    exports.RESOURCE_CATALYZED_GHODIUM_ALKALIDE,
    exports.RESOURCE_OPS,
    exports.RESOURCE_SILICON,
    exports.RESOURCE_METAL,
    exports.RESOURCE_BIOMASS,
    exports.RESOURCE_MIST,
    exports.RESOURCE_UTRIUM_BAR,
    exports.RESOURCE_LEMERGIUM_BAR,
    exports.RESOURCE_ZYNTHIUM_BAR,
    exports.RESOURCE_KEANIUM_BAR,
    exports.RESOURCE_GHODIUM_MELT,
    exports.RESOURCE_OXIDANT,
    exports.RESOURCE_REDUCTANT,
    exports.RESOURCE_PURIFIER,
    exports.RESOURCE_BATTERY,
    exports.RESOURCE_COMPOSITE,
    exports.RESOURCE_CRYSTAL,
    exports.RESOURCE_LIQUID,
    exports.RESOURCE_WIRE,
    exports.RESOURCE_SWITCH,
    exports.RESOURCE_TRANSISTOR,
    exports.RESOURCE_MICROCHIP,
    exports.RESOURCE_CIRCUIT,
    exports.RESOURCE_DEVICE,
    exports.RESOURCE_CELL,
    exports.RESOURCE_PHLEGM,
    exports.RESOURCE_TISSUE,
    exports.RESOURCE_MUSCLE,
    exports.RESOURCE_ORGANOID,
    exports.RESOURCE_ORGANISM,
    exports.RESOURCE_ALLOY,
    exports.RESOURCE_TUBE,
    exports.RESOURCE_FIXTURES,
    exports.RESOURCE_FRAME,
    exports.RESOURCE_HYDRAULICS,
    exports.RESOURCE_MACHINE,
    exports.RESOURCE_CONDENSATE,
    exports.RESOURCE_CONCENTRATE,
    exports.RESOURCE_EXTRACT,
    exports.RESOURCE_SPIRIT,
    exports.RESOURCE_EMANATION,
    exports.RESOURCE_ESSENCE
], exports.COLORS_ALL = [
    exports.COLOR_RED,
    exports.COLOR_PURPLE,
    exports.COLOR_BLUE,
    exports.COLOR_CYAN,
    exports.COLOR_GREEN,
    exports.COLOR_YELLOW,
    exports.COLOR_ORANGE,
    exports.COLOR_BROWN,
    exports.COLOR_GREY,
    exports.COLOR_WHITE
], exports.INTERSHARD_RESOURCES = [
    exports.SUBSCRIPTION_TOKEN,
    exports.CPU_UNLOCK,
    exports.PIXEL,
    exports.ACCESS_KEY
], exports.COMMODITIES = {
    [exports.RESOURCE_UTRIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_UTRIUM]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_UTRIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_UTRIUM_BAR]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_LEMERGIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_LEMERGIUM]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_LEMERGIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_LEMERGIUM_BAR]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_ZYNTHIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_ZYNTHIUM]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_ZYNTHIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_ZYNTHIUM_BAR]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_KEANIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_KEANIUM]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_KEANIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_KEANIUM_BAR]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_GHODIUM_MELT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_GHODIUM]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_GHODIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_GHODIUM_MELT]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_OXIDANT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_OXYGEN]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_OXYGEN]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_OXIDANT]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_REDUCTANT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_HYDROGEN]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_HYDROGEN]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_REDUCTANT]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_PURIFIER]: {
        amount: 100,
        cooldown: 20,
        components: {
            [exports.RESOURCE_CATALYST]: 500,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_CATALYST]: {
        amount: 500,
        cooldown: 20,
        components: {
            [exports.RESOURCE_PURIFIER]: 100,
            [exports.RESOURCE_ENERGY]: 200
        }
    },
    [exports.RESOURCE_BATTERY]: {
        amount: 50,
        cooldown: 10,
        components: {
            [exports.RESOURCE_ENERGY]: 600
        }
    },
    [exports.RESOURCE_ENERGY]: {
        amount: 500,
        cooldown: 10,
        components: {
            [exports.RESOURCE_BATTERY]: 50
        }
    },
    [exports.RESOURCE_COMPOSITE]: {
        level: 1,
        amount: 20,
        cooldown: 50,
        components: {
            [exports.RESOURCE_UTRIUM_BAR]: 20,
            [exports.RESOURCE_ZYNTHIUM_BAR]: 20,
            [exports.RESOURCE_ENERGY]: 20
        }
    },
    [exports.RESOURCE_CRYSTAL]: {
        level: 2,
        amount: 6,
        cooldown: 21,
        components: {
            [exports.RESOURCE_LEMERGIUM_BAR]: 6,
            [exports.RESOURCE_KEANIUM_BAR]: 6,
            [exports.RESOURCE_PURIFIER]: 6,
            [exports.RESOURCE_ENERGY]: 45
        }
    },
    [exports.RESOURCE_LIQUID]: {
        level: 3,
        amount: 12,
        cooldown: 60,
        components: {
            [exports.RESOURCE_OXIDANT]: 12,
            [exports.RESOURCE_REDUCTANT]: 12,
            [exports.RESOURCE_GHODIUM_MELT]: 12,
            [exports.RESOURCE_ENERGY]: 90
        }
    },
    [exports.RESOURCE_WIRE]: {
        amount: 20,
        cooldown: 8,
        components: {
            [exports.RESOURCE_UTRIUM_BAR]: 20,
            [exports.RESOURCE_SILICON]: 100,
            [exports.RESOURCE_ENERGY]: 40
        }
    },
    [exports.RESOURCE_SWITCH]: {
        level: 1,
        amount: 5,
        cooldown: 70,
        components: {
            [exports.RESOURCE_WIRE]: 40,
            [exports.RESOURCE_OXIDANT]: 95,
            [exports.RESOURCE_UTRIUM_BAR]: 35,
            [exports.RESOURCE_ENERGY]: 20
        }
    },
    [exports.RESOURCE_TRANSISTOR]: {
        level: 2,
        amount: 1,
        cooldown: 59,
        components: {
            [exports.RESOURCE_SWITCH]: 4,
            [exports.RESOURCE_WIRE]: 15,
            [exports.RESOURCE_REDUCTANT]: 85,
            [exports.RESOURCE_ENERGY]: 8
        }
    },
    [exports.RESOURCE_MICROCHIP]: {
        level: 3,
        amount: 1,
        cooldown: 250,
        components: {
            [exports.RESOURCE_TRANSISTOR]: 2,
            [exports.RESOURCE_COMPOSITE]: 50,
            [exports.RESOURCE_WIRE]: 117,
            [exports.RESOURCE_PURIFIER]: 25,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_CIRCUIT]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [exports.RESOURCE_MICROCHIP]: 1,
            [exports.RESOURCE_TRANSISTOR]: 5,
            [exports.RESOURCE_SWITCH]: 4,
            [exports.RESOURCE_OXIDANT]: 115,
            [exports.RESOURCE_ENERGY]: 32
        }
    },
    [exports.RESOURCE_DEVICE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [exports.RESOURCE_CIRCUIT]: 1,
            [exports.RESOURCE_MICROCHIP]: 3,
            [exports.RESOURCE_CRYSTAL]: 110,
            [exports.RESOURCE_GHODIUM_MELT]: 150,
            [exports.RESOURCE_ENERGY]: 64
        }
    },
    [exports.RESOURCE_CELL]: {
        amount: 20,
        cooldown: 8,
        components: {
            [exports.RESOURCE_LEMERGIUM_BAR]: 20,
            [exports.RESOURCE_BIOMASS]: 100,
            [exports.RESOURCE_ENERGY]: 40
        }
    },
    [exports.RESOURCE_PHLEGM]: {
        level: 1,
        amount: 2,
        cooldown: 35,
        components: {
            [exports.RESOURCE_CELL]: 20,
            [exports.RESOURCE_OXIDANT]: 36,
            [exports.RESOURCE_LEMERGIUM_BAR]: 16,
            [exports.RESOURCE_ENERGY]: 8
        }
    },
    [exports.RESOURCE_TISSUE]: {
        level: 2,
        amount: 2,
        cooldown: 164,
        components: {
            [exports.RESOURCE_PHLEGM]: 10,
            [exports.RESOURCE_CELL]: 10,
            [exports.RESOURCE_REDUCTANT]: 110,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_MUSCLE]: {
        level: 3,
        amount: 1,
        cooldown: 250,
        components: {
            [exports.RESOURCE_TISSUE]: 3,
            [exports.RESOURCE_PHLEGM]: 3,
            [exports.RESOURCE_ZYNTHIUM_BAR]: 50,
            [exports.RESOURCE_REDUCTANT]: 50,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_ORGANOID]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [exports.RESOURCE_MUSCLE]: 1,
            [exports.RESOURCE_TISSUE]: 5,
            [exports.RESOURCE_PURIFIER]: 208,
            [exports.RESOURCE_OXIDANT]: 256,
            [exports.RESOURCE_ENERGY]: 32
        }
    },
    [exports.RESOURCE_ORGANISM]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [exports.RESOURCE_ORGANOID]: 1,
            [exports.RESOURCE_LIQUID]: 150,
            [exports.RESOURCE_TISSUE]: 6,
            [exports.RESOURCE_CELL]: 310,
            [exports.RESOURCE_ENERGY]: 64
        }
    },
    [exports.RESOURCE_ALLOY]: {
        amount: 20,
        cooldown: 8,
        components: {
            [exports.RESOURCE_ZYNTHIUM_BAR]: 20,
            [exports.RESOURCE_METAL]: 100,
            [exports.RESOURCE_ENERGY]: 40
        }
    },
    [exports.RESOURCE_TUBE]: {
        level: 1,
        amount: 2,
        cooldown: 45,
        components: {
            [exports.RESOURCE_ALLOY]: 40,
            [exports.RESOURCE_ZYNTHIUM_BAR]: 16,
            [exports.RESOURCE_ENERGY]: 8
        }
    },
    [exports.RESOURCE_FIXTURES]: {
        level: 2,
        amount: 1,
        cooldown: 115,
        components: {
            [exports.RESOURCE_COMPOSITE]: 20,
            [exports.RESOURCE_ALLOY]: 41,
            [exports.RESOURCE_OXIDANT]: 161,
            [exports.RESOURCE_ENERGY]: 8
        }
    },
    [exports.RESOURCE_FRAME]: {
        level: 3,
        amount: 1,
        cooldown: 125,
        components: {
            [exports.RESOURCE_FIXTURES]: 2,
            [exports.RESOURCE_TUBE]: 4,
            [exports.RESOURCE_REDUCTANT]: 330,
            [exports.RESOURCE_ZYNTHIUM_BAR]: 31,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_HYDRAULICS]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [exports.RESOURCE_LIQUID]: 150,
            [exports.RESOURCE_FIXTURES]: 3,
            [exports.RESOURCE_TUBE]: 15,
            [exports.RESOURCE_PURIFIER]: 208,
            [exports.RESOURCE_ENERGY]: 32
        }
    },
    [exports.RESOURCE_MACHINE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [exports.RESOURCE_HYDRAULICS]: 1,
            [exports.RESOURCE_FRAME]: 2,
            [exports.RESOURCE_FIXTURES]: 3,
            [exports.RESOURCE_TUBE]: 12,
            [exports.RESOURCE_ENERGY]: 64
        }
    },
    [exports.RESOURCE_CONDENSATE]: {
        amount: 20,
        cooldown: 8,
        components: {
            [exports.RESOURCE_KEANIUM_BAR]: 20,
            [exports.RESOURCE_MIST]: 100,
            [exports.RESOURCE_ENERGY]: 40
        }
    },
    [exports.RESOURCE_CONCENTRATE]: {
        level: 1,
        amount: 3,
        cooldown: 41,
        components: {
            [exports.RESOURCE_CONDENSATE]: 30,
            [exports.RESOURCE_KEANIUM_BAR]: 15,
            [exports.RESOURCE_REDUCTANT]: 54,
            [exports.RESOURCE_ENERGY]: 12
        }
    },
    [exports.RESOURCE_EXTRACT]: {
        level: 2,
        amount: 2,
        cooldown: 128,
        components: {
            [exports.RESOURCE_CONCENTRATE]: 10,
            [exports.RESOURCE_CONDENSATE]: 30,
            [exports.RESOURCE_OXIDANT]: 60,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_SPIRIT]: {
        level: 3,
        amount: 1,
        cooldown: 200,
        components: {
            [exports.RESOURCE_EXTRACT]: 2,
            [exports.RESOURCE_CONCENTRATE]: 6,
            [exports.RESOURCE_REDUCTANT]: 90,
            [exports.RESOURCE_PURIFIER]: 20,
            [exports.RESOURCE_ENERGY]: 16
        }
    },
    [exports.RESOURCE_EMANATION]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [exports.RESOURCE_SPIRIT]: 2,
            [exports.RESOURCE_EXTRACT]: 2,
            [exports.RESOURCE_CONCENTRATE]: 3,
            [exports.RESOURCE_KEANIUM_BAR]: 112,
            [exports.RESOURCE_ENERGY]: 32
        }
    },
    [exports.RESOURCE_ESSENCE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [exports.RESOURCE_EMANATION]: 1,
            [exports.RESOURCE_SPIRIT]: 3,
            [exports.RESOURCE_CRYSTAL]: 110,
            [exports.RESOURCE_GHODIUM_MELT]: 150,
            [exports.RESOURCE_ENERGY]: 64
        }
    },
};
