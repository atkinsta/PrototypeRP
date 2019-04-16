import React from "react";

export default function TopBar(props){
    return (
        <div className={"topBar"}>
            <span className={"currTime"}>{props.time}</span>
            <img className={"signal"} src={"./assets/signal.png"} alt={"signal"}/>
            <img className={"battery"} src={"./assets/battery.png"} alt={"battery"}/>
        </div>

    )
}
