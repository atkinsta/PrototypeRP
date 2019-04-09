mp.events.addCommand("kill", player => {
    player.health = 0;
});

mp.events.addCommand("coords", player => {
    player.call("onMessageFromServer", player.position.toString());
});
