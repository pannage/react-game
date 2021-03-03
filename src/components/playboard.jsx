import React, { Component } from "react";
import {Score2} from "./score.jsx";
import {Score3} from "./score.jsx";
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
        this.chooseWinner3Playes = this.chooseWinner3Playes.bind(this)
        this.replay = this.replay.bind(this)
    }

    startPlay(myPick) {
        const fieldSize = this.props.fieldSize;
        const playersNum = this.props.playersNum;
        let choosen;
        let choosen2;
        if (fieldSize===3) {
            choosen= Math.floor(Math.random() * 3)

        } else {
            choosen= Math.floor(Math.random() * 5)
        }

        if (playersNum === 3) {
            if (fieldSize===3) {
                choosen2= Math.floor(Math.random() * 3)

            } else {
                choosen2= Math.floor(Math.random() * 5)
            }
        }

        let pickedImg = ['rock', 'papper', 'scissors', 'lizard', 'spock'][choosen]
        // let pickedImg = 'rock';

        this.setState({isChoiseFieldVisible: false, isArenavisible: true, myPick: myPick})

        if (playersNum ===2 ) {
            setTimeout (() => {this.setState({comp1Pick: pickedImg})}, 1000)

            let winner = this.chooseWinner2Playes (myPick, pickedImg)
            if (winner === 'P1'){
                this.setState({isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1})
            } else if (winner === 'P2') {
                this.setState({isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1})
            } else if (winner === 'draw') {
                this.setState({isPlayerWin: null, isComp1Win: null, resultMessage: 'Draw'})
            }
        } else {
            let pickedImg2 = ['rock', 'papper', 'scissors', 'lizard', 'spock'][choosen2]
            // let pickedImg2 = 'rock';
            setTimeout (() => {this.setState({comp1Pick: pickedImg, comp2Pick: pickedImg2})}, 1000)
            this.chooseWinner3Playes (myPick, pickedImg, pickedImg2)
        }

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

    chooseWinner2Playes (P1Pick, P2Pick, playerTags) {

        if (P1Pick === 'rock' && (P2Pick === 'scissors' || P2Pick === 'lizard')) {
           return playerTags.p1
        } else if (P1Pick === 'rock' && (P2Pick === 'papper' || P2Pick === 'spock')) {
            return playerTags.p2
        } else if (P1Pick === 'papper' && (P2Pick === 'rock' || P2Pick === 'spock')) {
            return playerTags.p1
        } else if (P1Pick === 'papper' && (P2Pick === 'scissors' || P2Pick === 'lizard')) {
            return playerTags.p2
        } else if (P1Pick === 'scissors' && (P2Pick === 'lizard' || P2Pick === 'papper')) {
            return playerTags.p1
        } else if (P1Pick === 'scissors' && (P2Pick === 'spock' || P2Pick === 'rock')) {
            return playerTags.p2
        } else if (P1Pick === 'lizard' && (P2Pick === 'spock' || P2Pick === 'papper')) {
            return playerTags.p1
        } else if (P1Pick === 'lizard' && (P2Pick === 'scissors' || P2Pick === 'rock')) {
            return playerTags.p2
        } else if (P1Pick === 'spock' && (P2Pick === 'rock' || P2Pick === 'scissors')) {
            return playerTags.p1
        } else if (P1Pick === 'spock' && (P2Pick === 'papper' || P2Pick === 'lizard')) {
            return playerTags.p2
        } else if (P1Pick === P2Pick) {
            return 'draw'
                   }

    }

    chooseWinner3Playes (P1Pick, P2Pick, P3Pick) {
        let resultState = {}
        const youAndComp1Win = {isPlayerWin: true, isComp1Win: true, isComp2Win: false,
            resultMessage: 'You and Comp1 are Win',
            playerScore: this.state.playerScore + 1,
            comp1Score: this.state.comp1Score + 1,
            comp2Score: this.state.comp2Score - 1}
        const youAndComp2Win = {isPlayerWin: false, isComp1Win: false, isComp2Win: true,
            resultMessage: 'You and Comp2 are Win',
            playerScore: this.state.playerScore + 1,
            comp1Score: this.state.comp1Score - 1,
            comp2Score: this.state.comp2Score + 1}
        const youWin =  {isPlayerWin: true, isComp1Win: false, isComp2Win: false,
            resultMessage: 'You Win, Human!',
            playerScore: this.state.playerScore + 1,
            comp1Score: this.state.comp1Score - 1,
            comp2Score: this.state.comp2Score - 1}
        const youAndComp1Lose = {isPlayerWin: false, isComp1Win: false, isComp2Win: true,
            resultMessage: 'You and Comp1 are Lose',
            playerScore: this.state.playerScore - 1,
            comp1Score: this.state.comp1Score - 1,
            comp2Score: this.state.comp2Score + 1}
        const youAndComp2Lose = {isPlayerWin: false, isComp1Win: true, isComp2Win: false,
            resultMessage: 'You and Comp2 are Lose',
            playerScore: this.state.playerScore - 1,
            comp1Score: this.state.comp1Score + 1,
            comp2Score: this.state.comp2Score - 1}
        const youLose = {isPlayerWin: false, isComp1Win: true, isComp2Win: true,
            resultMessage: 'You Lose, Human!',
            playerScore: this.state.playerScore - 1,
            comp1Score: this.state.comp1Score + 1,
            comp2Score: this.state.comp2Score + 1}
        const draw = {isPlayerWin: null, isComp1Win: null, isComp2Win: null,
            resultMessage: 'Draw!',
            playerScore: this.state.playerScore + 0,
            comp1Score: this.state.comp1Score + 0,
            comp2Score: this.state.comp2Score + 0}
        let P1P2 = this.chooseWinner2Playes(P1Pick, P2Pick, { p1: 'P1', p2: 'P2' })
        let P1P3 = this.chooseWinner2Playes(P1Pick, P3Pick, { p1: 'P1', p2: 'P3' })
        let P2P3 = this.chooseWinner2Playes(P2Pick, P3Pick, { p1: 'P2', p2: 'P3' })
        if (P1P2 === P1P3) {
            resultState = youWin
        } else if ((P1P2 === 'P1')&&(P1P3 === 'P3') && (P2P3 === 'P2')) {
            resultState = draw
        } else if ((P1P2 === 'P2')&&(P1P3 === 'P3') && (P2P3 === 'P2')) {
            resultState = youAndComp2Lose
        } else if (P1P3 === P2P3) {
            resultState = youAndComp1Lose
        } else if ((P1P2 === 'draw')&&(P1P3 === 'P1')) {
            resultState = youAndComp1Win
        } else if ((P1P2 === 'P1')&&(P1P3 === 'draw')) {
            resultState = youAndComp2Win
        } else if ((P1P2 === 'P2')||(P1P3 === 'P3')&&(P2P3 === 'draw')) {
            resultState = youLose
        } else if ((P1P2 === 'draw')&&(P1P3 === 'P3')) {
            resultState = youAndComp1Lose
        } else if ((P1P2 === 'draw')&&(P1P3 === 'draw')&&(P2P3 === 'draw')) {
            resultState = draw
        } else if ((P1P2 === 'P2')&&(P1P3 === 'P1') && (P2P3 === 'P2')) {
            resultState = youAndComp2Lose
        }

        this.setState(resultState)

    }



    render() {
        const choiceTable = this.props.fieldSize === 3 ? <ChoiceThree start={this.startPlay} fieldSize = {this.props.fieldSize} playersNum = {this.props.playersNum}/> :
            <ChoiceFive start={this.startPlay} fieldSize = {this.props.fieldSize} playersNum = {this.props.playersNum}/>;
        const arena = this.props.playersNum === 2 ? <Arena2 pick={this.state.myPick} comp1={this.state.comp1Pick} message={this.state.resultMessage} replay={this.replay}/> :
            <Arena3 pick={this.state.myPick} comp1={this.state.comp1Pick} comp2={this.state.comp2Pick} message={this.state.resultMessage} replay={this.replay}/>
        const score = this.props.playersNum === 2 ? <Score2 playerScore = {this.state.playerScore} comp1Score = {this.state.comp1Score}/> :
        <Score3 playerScore = {this.state.playerScore} comp1Score = {this.state.comp1Score} comp2Score = {this.state.comp2Score}/>

        return (
            <div className="playboard">
                {score}
                { this.state.isArenavisible ? arena : null}
                { this.state.isChoiseFieldVisible ? choiceTable : null }
            </div>
        );
    }
}