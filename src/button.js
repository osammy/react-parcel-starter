import React from 'react';


export const Button = (props) => {
    const { handleClick, buttonStyle, buttonValue } = props; 
    return <div>
                <button style={buttonStyle} onClick={handleClick}>{buttonValue}</button>
            </div>
}