const blips = [
    {name: "Garage 1", position: {X: 65.77540588378906, Y: 14.004639625549316, Z: 69.06192016601562}, type: 50, color: 3},
    {name: "Garage 2", position: {X: 273.7178649902344, Y: -344.0126953125, Z: 44.91986846923828}, type: 50, color: 3},
    {name: "Garage 3", position: {X: 46.39046859741211, Y: -842.507080078125, Z: 30.88793182373047}, type: 50, color: 3},
    {name: "Garage 4", position: {X: 55.21228790283203, Y: -879.2551879882812, Z: 30.362932205200195}, type: 50, color: 3},
    {name: "Garage 5", position: {X: 211.5010223388672, Y: -809.1383666992188, Z: 30.822240829467773}, type: 50, color: 3},
    {name: "Bank 1", position: {X: 314.21533203125, Y: -279.0882873535156, Z: 54.1707878112793}, type: 207, color: 2},
    {name: "Gun Store 1", position: {X: 252.31398010253906, Y: -50.68904495239258, Z: 69.94104766845703}, type: 110, color: 70},
    {name: "Hospital 1", position: {X: 299.0693664550781, Y: -584.6061401367188, Z: 43.26084518432617}, type: 51, color: 75},
    {name: "Bank 2", position: {X: 149.49021911621094, Y: -1040.5809326171875, Z: 29.374086380004883}, type: 207, color: 2},
    {name: "Gun Store 2", position: {X: -662.05419921875, Y: -934.9296875, Z: 21.8292179107666}, type: 110, color: 70},
    {name: "Store 1", position: {X: -707.4067993164062, Y: -913.5687866210938, Z: 19.21558952331543}, type: 52, color: 27},
    {name: "Clothing 1", position: {X: 124.27051544189453, Y: -218.75331115722656, Z: 54.55782699584961}, type: 73, color: 4},
];
 module.exports.blipInit = () => {
    return blips.forEach(blip => {
        return mp.blips.new(blip.type, new mp.Vector3(parseInt(blip.position.X), parseInt(blip.position.Y), parseInt(blip.position.Z)),
            {
                name: blip.name,
                color: blip.color,
                shortRange: true
            });
    })
};
