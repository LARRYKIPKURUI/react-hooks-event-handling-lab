// Code Keypad Component Here
import React from "react";

function inputPass() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={inputPass}/>
        </div>
    )
}

export default Keypad;