import React, {Component} from "react";

class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: ["Testing in react"],
            opened: false
        }
    }

    componentWillMount() {
        EventManager.addHandler("consoleOpened", this.consoleOpened.bind(this));
        EventManager.addHandler("onConsoleLog", this.onConsoleLog.bind(this));

        console.log = function() {
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] == 'object') {
                    trigger("onConsoleLog", (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]));
                } else {
                    trigger("onConsoleLog", arguments[i]);
                }
            }
        };
    }

    componentWillUnmount() {
        EventManager.removeHandler("consoleOpened", this.consoleOpened.bind(this));
        EventManager.removeHandler("onConsoleLog", this.onConsoleLog.bind(this));
    }

    consoleOpened() {
        this.setState({
            opened: !this.state.opened
        })
    }

    onConsoleLog(msg) {
        if(this.state.logs < 40) {
            this.setState({
                logs: [...this.state.logs, msg]
            });
        }
        else {
            this.setState({
                logs: [this.state.logs.slice(1, 40), msg]
            })
        }
    }

    render() {
        return (
            <div className={"console"} style={this.state.opened ? {display: "block"} : {display: "none"}}>
                {this.state.logs.map(log =>
                    <h1>{log}</h1>
                )}
            </div>
        )
    }
}

export default Console;
