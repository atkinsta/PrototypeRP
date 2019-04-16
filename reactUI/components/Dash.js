import React, {Component} from "react";
import "../styles/dash.scss";

import Speed from "./functional/Speed.js";
import Engine from "./functional/Engine.js";

const engineDict = {

};

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 0,
            show: false,
            engine: engineDict.yellow
        }
    }

    componentDidMount() {
        EventManager.addHandler("renderDash", this.renderDash.bind(this));
        EventManager.addHandler("onSpeedChange", this.onSpeedChange.bind(this));
        EventManager.addHandler("hideDash", this.hideDash.bind(this));
        EventManager.addHandler("changeEngineState", this.changeEngineState.bind(this));
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

    changeEngineState(engineState) {
        this.setState({
            engine: engineState
        });
    }

    render() {
        return (
            <div className={"dash"} style={this.state.show ? {display: "block"} : {display: "none"}}>
                <Speed speed={this.state.speed} show={this.state.show}/>
                <Engine engine={this.state.engine} />
            </div>
        )
    }
}
export default Dash;
