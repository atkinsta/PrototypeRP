let browser;
mp.events.add('guiReady', () => {
    if (!browser) {
        browser = mp.browsers.new('package://prototype/index.html');
    }
});

// Handle event from server and send data to react app
mp.events.add('onMessageFromServer', (value) => {
    browser.execute(`trigger('onMessage', '${value}')`);
});

// Handle event from react app
mp.events.add('showUrl', (url) => {
    mp.gui.chat.push(url);
});

mp.events.add("pushCords", coords => {
    mp.gui.chat.push(coords);
});

mp.events.add("toggleMe", value => {
    mp.gui.chat.push(value);
});

// F12 - trigger cursor
mp.keys.bind(0x26, true, () => {
    console.log("please log something");
    let state = !mp.gui.cursor.visible;
    mp.gui.cursor.show(state, state);
    browser.execute("trigger('onKeyPress')");
});
