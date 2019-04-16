mp.events.add('playerDeath', (player) => {
    player.spawn(0, 0, 0);
    player.health = 100;
    player.armour = 100;
});

mp.events.add("playerEnterVehicle", (player) => {
    setTimeout(() => {
        if (!!player.vehicle) {
            player.call("renderDash", player.vehicle);
        }
    }, 300)
});

mp.events.add("playerExitVehicle", (player) => {
    player.call("removeDash");
});

mp.events.add("playerCreateWaypoint", (player, position) => {
    mp.players.broadcast("I did something");
    player.position = position;
});
