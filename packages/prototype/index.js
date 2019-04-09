require("./events.js");
require("./commands.js");

mp.events.add("playerJoin", function(player) {
    console.log(player.name + ' has joined!');
});

mp.events.addCommand("msg", function(player, fullText) {
    player.call('onMessageFromServer', [fullText]);
});
