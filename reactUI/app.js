import "./styles/main.scss"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            message: 'default message',
            carSpawns: ["0, 1, 3"],
            show: false
        }
    }

    componentDidMount() {
        EventManager.addHandler('onMessage', this.onMessage.bind(this));
        EventManager.addHandler("onKeyPress", this.onKeyPress.bind(this));
        EventManager.addHandler("carSpawnAdded", this.carSpawnAdded.bind(this));
        this.timerId = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        EventManager.removeHandler("carSpawnAdded", this.carSpawnAdded);
        EventManager.removeHandler('onMessage', this.onMessage);
        EventManager.removeHandler("onKeyPress", this.onKeyPress);
    }

    onMessage(value) {
        this.setState({message: value})
    }

    onKeyPress() {
        this.setState({show: !this.state.show});
    }

    carSpawnAdded(position) {
        this.setState({carSpawns: [...this.state.carSpawns, position]});
        let retPos = position;
        mp.trigger("displaySpawns", retPos);
    }

    // send current url to client
     click() {
        let currentUrl = window.location.pathname;
        mp.trigger("showUrl", currentUrl);
        this.state.carSpawns.forEach(spawn => {
            mp.trigger("displaySpawns", spawn);
        })
    }

    render() {
        return(
            <div className="app" style={this.state.show ? {display:"block"} : {display:"none"}}>
                <h1> Vehicle spawns </h1>
                <p className="current-time">{this.state.time.toLocaleTimeString()}</p>
                {this.state.carSpawns.map(spawn => {
                    return <p style={{color: "red"}}>{spawn}</p>
                })}
                <button className="send-button" onClick={this.click}>Send</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
