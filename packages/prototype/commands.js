const fs = require("fs");

mp.events.addCommand("kill", player => {
    player.health = 0;
});

mp.events.addCommand("coords", (player, args) => {
    let allArgs = args.split(" ");
    let blipType = allArgs[0];
    let blipColor = allArgs[1];
    let rest = allArgs.slice(2).join(" ");
    let returnString = `{name: "${rest}", position: {${player.position.toString().split("; ").join(", ")}}, type: ${blipType}, color: ${blipColor}},
`;
    fs.appendFile("coords.txt", returnString, (err) => {
        mp.players.broadcast("Data written to file: " + returnString);
        if (err) {
            mp.players.broadcast(err.toString());
        }
    });
    player.call("carSpawnAdded", [returnString]);
});

mp.events.addCommand('veh', (player, _, vehName) => {
    if (vehName && vehName.trim().length > 0) {
        let pos = player.position;
        pos.x += 2;
        // If player has vehicle - change model.
        if (player.vehicle) {
            player.vehicle.repair();
            player.vehicle.position = pos;
            player.vehicle.model = mp.joaat(vehName);
            // Else - create new vehicle.
        } else {
            player.vehicle = mp.vehicles.new(mp.joaat(vehName), pos);
        }
    } else {
        player.outputChatBox(`Command syntax: /veh [vehicle_name]`);
    }
});

mp.events.addCommand("anim", (player, rest) => {
    let args = rest.split(" ");
    mp.players.broadcast(args.toString());
    if (args.length === 2) {
        args.push("1");
        args.push("1");
    }
    player.playAnimation(args[0], args[1], parseInt(args[2]), parseInt(args[3]));
});

mp.events.addCommand("fix", player => {
    if (!!player.vehicle) {
        player.vehicle.repair();
    }
});

mp.events.addCommand("testLogs", () => {
    console.log("test");
});

mp.events.addCommand("stop", player => {
   player.stopAnimation();
});

mp.events.addCommand("carSpawn", (player, args) => {
    let returnString = `{model: "${args}", position: {${player.position.toString().split("; ").join(", ")}}},
`;
    fs.appendFile("vehSpawn.txt", returnString, (err) => {
        mp.players.broadcast("Data written to file: " + returnString);
        if (err) {
            mp.players.broadcast(err.toString());
        }
    });
});


