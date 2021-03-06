import React, { Component } from "react";
import '../styles/styles.css';

export class Arena2 extends Component {
    render() {
        const playerWin = ''
        const comp1Win = ''
        const comp2Win = ''
        if (this.props.playerWin) {
            this.playerWin = 'pulse'
        } else if (this.props.comp1Win) {
            this.comp1Win = 'pulse'
        } else if (this.props.comp2Win)
            this.comp2Win = 'pulse'
        return (
            <div>

                <div className="result">
                    <h3 className="result-message">{this.props.message}</h3>
                    <button className="button replay icon-btn" onClick = {() => this.props.replay()}>replay</button>
                </div>
                <div className="arena2">
                    <div className={`${this.props.pick} arena ${this.playerWin}`}></div>
                    <div className={`${this.props.comp1} arena ${this.comp1Win}`}></div>
                </div>

            </div>
        );
    }
}

export class Arena3 extends Component {
    render() {
        return (
            <div>
                <div className="result">
                    <h3 className="result-message">{this.props.message}</h3>
                    <button className="button replay icon-btn" onClick = {() => this.props.replay()}>replay</button>
                </div>
                <div className="arena3">
                    <div className={`${this.props.pick} arena ${this.playerWin}`}></div>
                    <div className={`${this.props.comp1} arena ${this.comp1Win}`}></div>
                    <div className={`${this.props.comp2} arena ${this.comp2Win}`}></div>
                </div>

            </div>
        );
    }
}