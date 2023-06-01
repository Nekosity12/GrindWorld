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
        image: "images/system/wip",
    },
    stick: {
        image: "images/system/wip",
    },
    planks: {
        image: "images/system/wip",
    },
    door: {
        image: "images/system/wip",
    },
    "crafting table": {
        image: "images/system/wip",
    },
    "dirt hut": {
        image: "images/system/wip",
    },
});

// Areas

addArea("fS",                                            // Function for adding areas to your game
{
    name: "Fresh Seed",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "surface",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
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
                    probability: 30,
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
                    id: "coal_ore",
                    time: [["", 0.75]],
                    probability: 30,
                },
				{
                    id: "lapis_ore",
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
                    id: "r",
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
            name: "stick",
            desc: "Used to craft planks",
            type: "display",
            cost: [["stick", 0]],
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["stick", 2]],
        },
        {
            name: "crafting table",
            desc: "Required to build a dirt hut",
            type: "craft",
            cost: [["planks", 4]],
        },
        {
            name: "door",
            desc: "Required to build a dirt hut",
            type: "craft",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "dirt hut",
            desc: "Required to beat the game!",
            type: "craft",
            cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],
            message: "You have beaten the game!",
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