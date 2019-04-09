let browser;
mp.events.add('guiReady', () => {
    if (!browser) {
        browser = mp.browsers.new('package://prototype/index.html');

        mp.events.add("browserDomReady", _browser => {
            if (_browser == browser) {
                require("events.js")(browser);
            }
        })
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

// F12 - trigger cursor
mp.keys.bind(0x26, true, () => {
    let state = !mp.gui.cursor.visible;
    mp.gui.cursor.show(state, state);
});
