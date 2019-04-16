import React, {Component} from "react";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        EventManager.addHandler("contactsOnClick", this.contactsOnClick.bind(this));
    }

    contactsOnClick() {
        console.log("test");
        mp.trigger("contactsOnClick");
    }

    render() {
        return (
            <div className={"phoneApp"} onClick={this.contactsOnClick} style={{backgroundColor: this.props.color}}>
                <span className={"appLabel"} style={!this.state.appOpen ? {display: "block"} : {display: "none"}}>Contacts</span>
                <div className={"openApp"} style={this.state.appOpen ? {display: "block"} : {display: "none"}}>
                    <h1>Opened</h1>
                </div>
            </div>
        )
    }
}
export default Contacts;

