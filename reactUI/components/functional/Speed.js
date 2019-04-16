import React from "react";
import {useSpring, animated} from "react-spring";

const Speed = (props) => {
    const anim = useSpring({opacity: props.show ? 1 : 0});

    return (
        <animated.div style={anim}>
            <h1 className={"speed"}>{`${props.speed}`}</h1>
            <span className={"mph"}>mp/h</span>
        </animated.div>
    )
};

export default Speed;
