import React, { Component } from "react";
import '../styles/styles.css';


export default class Score extends Component {
    render() {
        return (
            <div className="score-wrapper">
                <div className="score-player">
                    <div>Player</div>
                    <div>{this.props.playerScore}</div>
                </div>
                <div className="score-player">
                    <div>Comp1</div>
                    <div>{this.props.comp1Score}</div>
                </div>
                <div className="score-player">
                    <div>Comp2</div>
                    <div>{this.props.comp2Score}</div>
                </div>
            </div>
        );
    }
}