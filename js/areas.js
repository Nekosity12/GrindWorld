// Game Info
setGameInfo({
    name: "GrindWorld",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/blank.png",                    // Link or path to an icon image for your game!
    ID: "gWorld31905",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    log: {
        image: "images/oakLog.png",
    },
    planks: {
        image: "images/system/wip.png",
    },
    "crafting table": {
        image: "images/system/wip.png",
    },
    grass: {
        image: "images/grass.png",
    },
    deepslate: {
        image: "images/system/wip.png",
    },
    stone: {
        image: "images/system/wip.png",
    },
    "lapis ore": {
        image: "images/system/wip.png",
    },
    "coal ore": {
        image: "images/system/wip.png",
    },
});

// Areas

addArea("fS",                                            // Function for adding areas to your game
{
    name: "Fresh Seed",
    image: "images/areas/freshseed.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "surface",
            unlocked: true,
            auto: ["crafting table"],                         // List of items that will auto-grind this grind
            background: "images/grinds/surfacegrind.png",
            resources: [
                {
                    id: "log",
                    time: [["", 3]],
                    probability: 15,
                },
                {
                    id: "dirt",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "grass",
                    time: [["", 0.2]],
                    probability: 55,
                },
            ]
        },
		{
            name: "caves",
            unlocked: false,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "stone",
                    time: [["", 3]],
                    probability: 15,
                },
                {
                    id: "coal ore",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "lapis ore",
                    time: [["", 0.2]],
                    probability: 30,
                },
            ]
        },
		{
            name: "deep caves",
            unlocked: false,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "deepslate",
                    time: [["", 3]],
                    probability: 15,
                },
                {
                    id: "s",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "t",
                    time: [["", 0.2]],
                    probability: 30,
                },
            ]
        },
		{
            name: "oceans",
            unlocked: false,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "u",
                    time: [["", 3]],
                    probability: 15,
                },
                {
                    id: "v",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "w",
                    time: [["", 0.2]],
                    probability: 30,
                },
            ]
        },
		{
            name: "farm",
            unlocked: false,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "x",
                    time: [["", 3]],
                    probability: 15,
                },
                {
                    id: "y",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "z",
                    time: [["", 0.2]],
                    probability: 30,
                },
            ]
        }
    ],

    crafts: [
        {
            name: "dirt",
            desc: "Basic building block, needed for farmland",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "grass",
            displayName: "seed",
            desc: "Used to grow wheat",
            type: "display",
            cost: [["grass", 0]],
        },
        {
            name: "log",
            displayName: "Oak Log",
            desc: "Used to create planks",
            type: "display",
            cost: [["log", 0]],
        },
        {
            name: "planks",
            displayName: "Oak Planks",
            desc: "Basic building block, used to make tools",
            type: "craft",
            amount: 4,
            cost: [["log", 1]],
        },
        {
            name: "crafting table",
            desc: "Required for advanced crafting",
            type: "craft",
            cost: [["planks", 4]],
        },
        {
            name: "stone",
            displayName: "Cobblestone",
            desc: "Basic building block, used to make better tools",
            type: "display",
            cost: [["stone", 0]],
        },
        {
            name: "coal",
            desc: "Resource, used as fuel",
            type: "display",
            cost: [["coal ore", 0]],
        },
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}