import React, { Component } from "react";
import PlayBoard from "./playboard.jsx";
import Menu from "./menu.jsx";
import '../styles/styles.css';
import Statistic from "./statistic.jsx"

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldSize: 3,
            playersNum: 2,
            startNewGame: false,
            isStatisticVisible: false
        }
        this.chooseFieldSize = this.chooseFieldSize.bind(this)
        this.choosePlayersNum = this.choosePlayersNum.bind(this)

    }

    chooseFieldSize (size) {
        this.setState({fieldSize: size})
    }

    choosePlayersNum (num) {
        this.setState({playersNum: num})
    }

    onStartNewGame() {
        this.setState({
            startNewGame: true
        })
    }

    onNewGameStarted() {
        this.setState({
            startNewGame: false
        })
    }

    toggleStatisticVisibility() {
        this.setState ({isStatisticVisible: !this.state.isStatisticVisible})
    }


    render() {
        return (
            <div className="main">
                {this.state.isStatisticVisible ? <Statistic/> : null}
                <PlayBoard fieldSize={this.state.fieldSize} playersNum={this.state.playersNum} newGame={this.state.startNewGame} onNewGameStarted={() => this.onNewGameStarted()}/>
                <Menu setFieldSize={this.chooseFieldSize} setPlayersNum={this.choosePlayersNum} onStartNewGame={() => this.onStartNewGame()} toggleStatisticVisibility={() => this.toggleStatisticVisibility()} />
            </div>
        );
    }
}