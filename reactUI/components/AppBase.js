import React, {Component} from "react";

class AppBase extends Component {
    constructor(props) {
        super(props);
        this.openPage = props.openPage;
    }

    componentWillMount() {
    }

    onClick() {
        this.setState({
            appOpen: true
        })
    }

    render() {
        return(
            <div className={"phoneApp"} onClick={this.onClick.bind(this)} style={{backgroundColor: this.props.color}}>
                {this.props.children}
            </div>
        )
    }
}
export default AppBase;
