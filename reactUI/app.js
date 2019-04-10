import "./styles/main.scss"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            message: 'default message',
            show: false
        }
    }

    componentDidMount() {
        EventManager.addHandler('onMessage', this.onMessage.bind(this));
        EventManager.addHandler("onKeyPress", this.onKeyPress.bind(this));
        this.timerId = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        EventManager.removeHandler('onMessage', this.onMessage);
        EventManager.removeHandler("onKeyPress", this.onKeyPress);
    }

    onMessage(value) {
        this.setState({message: value})
    }

    onKeyPress() {
        this.setState({show: !this.state.show});
    }

    // send current url to client
     click() {
        let currentUrl = window.location.pathname;
        mp.trigger("showUrl", currentUrl);
    }

    render() {
        return(
            <div className="app" style={this.state.show ? {display:"block"} : {display:"none"}}>
                <h1>Make UI on React!</h1>
                <p className="current-time">{this.state.time.toLocaleTimeString()}</p>
                <p className="message">{this.state.message}</p>
                <button className="send-button" onClick={this.click}>Send</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
