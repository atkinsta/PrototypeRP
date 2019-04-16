import React, {Component} from "react";

class Calls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appOpen: false
        }
    }

    componentWillMount() {
        EventManager.addHandler("callsOnClick", this.callsOnClick.bind());
    }

    callsOnClick() {
        mp.trigger("callsOnClick");
        this.setState({
            appOpen: true
        })
    }

    render() {
        return (
            <div className={"phoneApp"} onClick={this.callsOnClick} style={{backgroundColor: this.props.color}}>
                <span className={"appLabel"} style={!this.state.appOpen ? {display: "block"} : {display: "none"}}>Calls</span>
                <div className={"openApp"} style={this.state.appOpen ? {display: "block"} : {display: "none"}}>
                    <h1>Opened</h1>
                </div>
            </div>
        )
    }
}
export default Calls;
