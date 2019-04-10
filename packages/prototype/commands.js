mp.events.addCommand("kill", player => {
    player.health = 0;
});

mp.events.addCommand("coords", (player, args) => {
    mp.players.broadcast(player.position.toString() + ": " + args);
    let returnString = player.position.toString() + args;
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

mp.events.addCommand("fix", player => {
    if (!!player.vehicle) {
        player.vehicle.repair();
    }
});


