mp.events.add('playerDeath', (player) => {
    player.spawn(0, 0, 0);

    // player.model = skins[Math.floor(Math.random() * skins.length)];
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
