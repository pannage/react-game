import React, { Component } from "react";
import PlayBoard from "./playboard.jsx";
import Menu from "./menu.jsx";
import '../styles/styles.css';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldSize: 3,
            playersNum: 2
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

    render() {
        return (
            <div className="main">
                <PlayBoard fieldSize={this.state.fieldSize} playersNum={this.state.playersNum}/>
                <Menu setFieldSize={this.chooseFieldSize } setPlayersNum={this.choosePlayersNum}/>
            </div>
        );
    }
}