import React, {Component} from "react";
import "../styles/main.scss"

class Phone extends Component {
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
        mp.trigger("displaySpawns", position);
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
            <div className={"app"}>
                <img className={"phoneImg"} src={"./assets/Phone.png"} alt={"A phone"} style={{maxHeight: "100%", maxWidth:"100%"}}/>
                <div className={"phoneHome"}>

                </div>
            </div>
        )
    }
}

export default Phone;
