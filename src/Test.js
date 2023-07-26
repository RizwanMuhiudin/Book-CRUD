import React from 'react'

function Test() {
    let randomNum = Math.round(Math.random() * 6);
    if (randomNum === 0) {
        randomNum = randomNum + 1;
    }
    console.log(randomNum);
    return (
        <div>

        </div>
    )
}

export default Test
