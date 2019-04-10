import "./styles/main.scss"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const styles = {
    position: "relative",
    width: "30%",
    height: "40vh",
    margin: "20vh auto",
    borderRadius: "10px",
    boxShadow: "1px 1px 2px black",
    backgroundColor: "black",
    color: "white"
};

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
            <div style={this.styles}>
                <img src={"./assets/Phone.jpg"} alt={"A phone"}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
