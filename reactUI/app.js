import "./styles/main.scss"
import Phone from "./components/Phone.js"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return(
            <div className={"main"}>
                <Phone />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
