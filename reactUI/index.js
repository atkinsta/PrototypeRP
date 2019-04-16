let browser;
const blipInit = require("./main/blipInit").blipInit;
const dealershipInit = require("./main/dealershipInit").dealershipInit;

const renderedVehicles = [];
const renderedBlips = [];
//Trigger formatter, I learned my lesson trying to type those out manually
const tf = (eventName, value) => `trigger('${eventName}', '${value}')`;
mp.events.add('guiReady', () => {
    if (!browser) {
        browser = mp.browsers.new('package://prototype/index.html');
    }
    renderedVehicles.push(dealershipInit());
    renderedBlips.push(blipInit());
});

mp.events.add('onMessageFromServer', (value) => {
    browser.execute(tf("onMessage", value));
});

const dashLoop = {
    loop: null,
    startLoop: (vehicle) => {
        dashLoop.loop = setInterval(() => {
            if (vehicle.getIsEngineRunning()) {
                browser.execute(tf("changeEngineState", "./assets/enginegreen.png"));
            }
            else if (!vehicle.getIsEngineRunning()){
                browser.execute(tf("changeEngineState", "./assets/engineyellow.png"));
            }
            else if (vehicle.getEngineHealth() <= 400) {
                browser.execute(tf("changeEngineState", "./assets/enginered.png"));
            }
            browser.execute(tf("onSpeedChange", Math.round(vehicle.getSpeed() * 2.23694)));
        }, 16.666);
    },
    stopLoop: () => {
        clearInterval(dashLoop.loop);
    }
};

mp.events.add("renderDash", () => {
    let veh = mp.players.local.vehicle;
    browser.execute(tf("renderDash", true));
    dashLoop.startLoop(veh);
});

mp.events.add("removeDash", () => {
    dashLoop.stopLoop();
    browser.execute(tf("hideDash", false))
});

mp.events.add("contactsOnClick", () => {
    mp.gui.chat.push("Contacts Clicked");
});

mp.events.add("callsOnClick", () => {
    mp.gui.chat.push("Calls Clicked");
});

mp.events.add("carSpawnAdded", (position) => {
    browser.execute(tf("carSpawnAdded", position));
});

mp.keys.bind(0x26, true, () => {
    let state = !mp.gui.cursor.visible;
    mp.gui.cursor.show(state, state);
    browser.execute("trigger('onKeyPress')");
});

mp.keys.bind(0xC0, false, () => {
    browser.execute("trigger('consoleOpened')");
    console.log("test inside client functions")
});
