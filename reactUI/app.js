import "./styles/main.scss"
import Phone from "./components/Phone.js"
import Dash from "./components/Dash.js"
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppContainer from "./components/AppContainer";
import Console from "./components/Console"

class App extends Component {
    render() {
        return(
            <div className={"main"}>
                <Console />
                <Phone />
                <AppContainer/>
                <Dash />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
