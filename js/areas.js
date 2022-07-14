// Game Info

let gameInfo = {
    name: "My Grindcraft Game",                         // The name of your game!
    icon: "images/system/blank.png",                    // Link or path to an icon image for your game!
    ID: "myGrindcraftGame",                             // Your game's ID! Should be unique for every game!
};

// Resources

addResources(                                           // Function for adding all the resources (items/tools/buildings) that are used in your game!
    {
    dirt: {
        image: "images/dirt.png",
    },
    stick: {
        image: "images/stick.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
}
);

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "City State",
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
                    id: "stick",
                    time: [["", 0.5]],
                    image: "stick",
                    probability: 50,
                },
                {
                    id: "dirt",
                    image: "dirt",
                    time: [["", 0.6]],
                    probability: 50,
                },
            ]
        },
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

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was run
        
    },
}
);