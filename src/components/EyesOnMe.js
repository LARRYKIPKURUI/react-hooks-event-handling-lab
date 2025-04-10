// Code EyesOnMe Component Here
import React from 'react'

function focusOnMe() {
    console.log('Good!')
}
function blurOnMe() {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe () {
    return (    
        <button onFocus={focusOnMe} onBlur={blurOnMe}>Eyes on me</button>
    )
}

export default EyesOnMe;