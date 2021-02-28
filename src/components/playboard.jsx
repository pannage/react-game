import React, { Component } from "react";
import Score from "./score.jsx";
import {Arena2} from "./arena.jsx";
import {Arena3} from "./arena.jsx";
import {ChoiceThree} from "./choice.jsx";
import {ChoiceFive} from "./choice.jsx";
import '../styles/styles.css';

export default class PlayBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChoiseFieldVisible: true,
            isArenavisible: false,
            myPick: '',
            comp1Pick: '',
            comp2Pick: '',
            isPlayerWin: null,
            isComp1Win: null,
            isComp2Win: null,
            resultMessage: '',
            playerScore: 0,
            comp1Score: 0,
            comp2Score: 0
        }
        this.startPlay = this.startPlay.bind(this)
        this.chooseWinner2Playes = this.chooseWinner2Playes.bind(this)
        this.replay = this.replay.bind(this)
    }

    startPlay(myPick) {
        const choosen = Math.floor(Math.random() * 5)
        let pickedImg = ['rock', 'papper', 'scissors', 'lizard', 'spock'][choosen]
        this.setState({isChoiseFieldVisible: false, isArenavisible: true, myPick: myPick})
        setTimeout (() => {this.setState({comp1Pick: pickedImg})}, 1000)
        this.chooseWinner2Playes (myPick, pickedImg)
    }

    replay () {
        this.setState({isChoiseFieldVisible: true,
        isArenavisible: false,
        myPick: '',
        comp1Pick: '',
        comp2Pick: '',
        isPlayerWin: null,
        isComp1Win: null,
        isComp2Win: null,
        resultMessage: '', })
    }

    chooseWinner2Playes (myPick, comp1Pick) {
        if (myPick === 'rock' && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
            this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
        } else if (myPick === 'rock' && (comp1Pick === 'papper' || comp1Pick === 'spock')) {
            this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
        } else if (myPick === 'papper' && (comp1Pick === 'rock' || comp1Pick === 'spock')) {
            this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
        } else if (myPick === 'papper' && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
            this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
        } else if (myPick === 'scissors' && (comp1Pick === 'lizard' || comp1Pick === 'papper')) {
            this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
        } else if (myPick === 'scissors' && (comp1Pick === 'spock' || comp1Pick === 'rock')) {
            this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
        } else if (myPick === 'lizard' && (comp1Pick === 'spock' || comp1Pick === 'papper')) {
            this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
        } else if (myPick === 'lizard' && (comp1Pick === 'scissors' || comp1Pick === 'rock')) {
            this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
        } else if (myPick === 'spock' && (comp1Pick === 'rock' || comp1Pick === 'scissors')) {
            this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
        } else if (myPick === 'spock' && (comp1Pick === 'papper' || comp1Pick === 'lizard')) {
            this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
        } else if ((myPick === 'rock' && comp1Pick === 'rock') ||
                   (myPick === 'scissors' && comp1Pick === 'scissors') ||
                   (myPick === 'papper' && comp1Pick === 'papper') ||
                   (myPick === 'lizard' && comp1Pick === 'lizard') ||
                   (myPick === 'spock' && comp1Pick === 'spock')) {
                    this.setState({isPlayerWin: null, isComp1Win: null, resultMessage: 'Draw', playerScore: this.state.playerScore + 0, comp1Score: this.state.comp1Score + 0})
                   }
    }



    render() {

        return (
            <div className="playboard">
                <Score playerScore = {this.state.playerScore} comp1Score = {this.state.comp1Score} comp2Score = {this.state.comp2Score}/>
                { this.state.isArenavisible ? <Arena2 pick={this.state.myPick} comp1={this.state.comp1Pick} message={this.state.resultMessage} replay={this.replay}/> : null}
                { this.state.isChoiseFieldVisible ? <ChoiceFive start={this.startPlay} /> : null }
            </div>
        );
    }
}