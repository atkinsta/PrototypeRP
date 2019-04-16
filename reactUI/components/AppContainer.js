import React, {Component} from "react";
import Contacts from "./PhoneApps/Contacts";
import Calls from "./PhoneApps/Calls";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        EventManager.addHandler("onKeyPress", this.onKeyPress.bind(this));
    }

    onKeyPress() {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div className={"appContainer"} style={this.state.show ? {bottom: 0, transition: "bottom 500ms"} : {bottom: -1000, transition: "bottom 400ms"}}>
                <Contacts/>
                <Calls />
            </div>
        )
    }
}

export default AppContainer;
