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
        EventManager.addHandler("onKeyPress", this.onKeyPress.bind(this));
        this.timerId = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        EventManager.removeHandler("onKeyPress", this.onKeyPress);
    }

    onKeyPress() {
        this.setState({show: !this.state.show});
    }

    render() {
        return(
            <div className={"phone"} style={this.state.show ? {bottom: 0, transition: "bottom 500ms"} : {bottom: -1000, transition: "bottom 400ms"}}>
                <img className={"phoneImg"} src={"./assets/Phone.png"} alt={"A phone"}/>
                <div className={"phoneHome"}>

                </div>
            </div>
        )
    }
}

export default Phone;
