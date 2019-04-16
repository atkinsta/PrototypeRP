import React, {Component} from "react";
import "../styles/main.scss"
import TopBar from "./functional/TopBar";

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
        EventManager.addHandler("onKeyPress", this.onKeyPress.bind(this));
        EventManager.addHandler("carSpawnAdded", this.carSpawnAdded.bind(this));
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            });
        });
    }

    componentWillUnmount() {
        EventManager.removeHandler("onKeyPress", this.onKeyPress);
        EventManager.removeHandler("carSpawnAdded", this.carSpawnAdded.bind(this));
        clearInterval(this.timer);
    }

    onKeyPress() {
        this.setState({show: !this.state.show});
    }

    carSpawnAdded(position) {
        this.setState({
            carSpawns: [...this.state.carSpawns, position]
        })
    }

    render() {
        return(
            <div className={"phone"} style={this.state.show ? {bottom: 0, transition: "bottom 500ms"} : {bottom: -1000, transition: "bottom 400ms"}}>
                <img className={"phoneImg"} src={"./assets/Phone.png"} alt={"A phone"}/>
                <div className={"phoneHome"}>
                    <TopBar time={this.state.time.toLocaleTimeString()}/>
                </div>
            </div>
        )
    }
}

export default Phone;
