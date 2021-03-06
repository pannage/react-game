
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import {
    playAudio,
    pauseAudio,
    volumeOff,
    volumeOn,
} from './components/player.js';



ReactDOM.render(<App />, document.getElementById("root"));
let isMusicStarted = false;
document.body.addEventListener('click', () => {
    // debugger
    if (!isMusicStarted) {
        playAudio('music')
        isMusicStarted = true
    }


})

