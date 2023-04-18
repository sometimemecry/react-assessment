import React from "react";

const Button = ({onClick}) => {
    return(
        <>
            <button onClick={() => onClick(1)}><a href="User">User Home Secter</a></button>
            <button onClick={() => onClick(2)}><a href="Admin">Admin Home Secter</a></button>
        </>
    )
}

export default Button