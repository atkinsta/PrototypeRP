let browser;

//Trigger formatter, I learned my lesson trying to type those out manually
const tf = (eventName, value) => `trigger('${eventName}', '${value}')`;

mp.events.add('guiReady', () => {
    if (!browser) {
        browser = mp.browsers.new('package://prototype/index.html');
    }
});

// Handle event from server and send data to react app
mp.events.add('onMessageFromServer', (value) => {
    browser.execute(tf("onMessage", value));
});

const dashLoop = {
    loop: null,
    startLoop: (vehicle) => {
        dashLoop.loop = setInterval(() => {
            browser.execute(tf("onSpeedChange", Math.round(vehicle.getSpeed() * 2.33)));
        }, 16.666);
    },
    stopLoop: () => {
        clearInterval(dashLoop.loop);
    }
};

mp.events.add("renderDash", () => {
    let veh = mp.players.local.vehicle;
    browser.execute(tf("renderDash", true));
    dashLoop.startLoop(veh)
});

mp.events.add("removeDash", () => {
    dashLoop.stopLoop();
    browser.execute(tf("hideDash", false))
});

mp.keys.bind(0x26, true, () => {
    let state = !mp.gui.cursor.visible;
    mp.gui.cursor.show(state, state);
    browser.execute("trigger('onKeyPress')");
});
