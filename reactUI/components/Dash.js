import React, {Component} from "react";
import "../styles/dash.scss";

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 0,
            show: false
        }
    }

    componentDidMount() {
        EventManager.addHandler("renderDash", this.renderDash.bind(this));
        EventManager.addHandler("onSpeedChange", this.onSpeedChange.bind(this));
        EventManager.addHandler("hideDash", this.hideDash.bind(this));
    }

    renderDash() {
        this.setState({
            show: true
        });
    }

    hideDash() {
        this.setState({
            show: false
        })
    }

    onSpeedChange(speedNew) {
        this.setState({
            speed: speedNew
        });
    }

    render() {
        return (
            <div className={"dash"} style={this.state.show ? {display: "block"} : {display: "none"}}>
                <h1 className={"speed"}>{`${this.state.speed} MP/H`}</h1>
            </div>
        )
    }
}

export default Dash;
