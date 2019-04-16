import {blipInit} from "./blipInit"

exports = function(browser) {
    const renderedBlips = [];
    mp.events.add("playerJoin", player => {
        let policeBlip = mp.blips.new(60, new mp.Vector3(427.95, -981.05, 0),
            {
                name: 'Los Santos Police Station',
                color: 3,
                shortRange: true,
        });

        renderedBlips.push(blipInit());
    })
};
