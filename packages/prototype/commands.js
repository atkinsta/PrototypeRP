mp.events.addCommand("kill", player => {
    player.health = 0;
});

mp.events.addCommand("coords", (player, args) => {
    mp.players.broadcast(player.position.toString() + ": " + args);
});
