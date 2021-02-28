import React, { Component } from "react";
import '../styles/styles.css';

export class ChoiceThree extends Component {
    render() {
        return (
            <div className="choice-3">
                <img src="./assets/triangle.png" alt=""/>
                <div className="rock ch-3" onClick={() => this.props.start('rock') }></div>
                <div className="scissors ch-3" onClick={() => this.props.start('scissors')}></div>
                <div className="papper ch-3" onClick={() => this.props.start('papper')}></div>
            </div>
        );
    }
}

export class ChoiceFive extends Component {
    render() {
        return (
            <div className="choice-5">
                <img src="./assets/pent.png" alt=""/>
                <div className="rock ch-5" onClick={() => this.props.start('rock') } ></div>
                <div className="scissors ch-5" onClick={() => this.props.start('scissors')}></div>
                <div className="papper ch-5" onClick={() => this.props.start('papper')}></div>
                <div className="lizard ch-5" onClick={() => this.props.start('lizard')}></div>
                <div className="spock ch-5" onClick={() => this.props.start('spock')}></div>
            </div>
        );
    }
}

