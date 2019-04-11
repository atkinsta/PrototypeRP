import "./styles/main.scss"
import Phone from "./components/Phone.js"
import Dash from "./components/Dash.js"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return(
            <div className={"main"}>
                <Phone />
                <Dash />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
