const audioLevel = new Audio();
audioLevel.autoplay = 'autoplay'
audioLevel.loop = 'loop';
const audioEffect = new Audio();

export function playAudio(word, playerName = 'main') {
    const player = getPlayer(playerName);
    if (!player) {
        return
    }

    player.src = `../../assets/sounds/${word}.mp3`;
    player.load();
    player.volume = 0.1;
    player.play();
}

export function volumeOff(playerName = 'main') {
    const player = getPlayer(playerName);
    if (!player) {
        return
    }
    player.volume = 0;
}

export function volumeOn(playerName = 'main') {
    const player = getPlayer(playerName);
    if (!player) {
        return
    }
    player.volume = 0.1;
}

export function pauseAudio(playerName = 'main') {
    const player = getPlayer(playerName);
    if (!player) {
        return
    }
    player.pause();
}

function getPlayer(playerName) {
    if (playerName === 'main') {
        return audioLevel
    } else if (playerName === 'effect') {
        return audioEffect
    }
}

