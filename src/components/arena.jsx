import React, { Component } from "react";
import '../styles/styles.css';

export class Arena2 extends Component {
    render() {
        return (
            <div className="arena2">
                <div className={`${this.props.pick} arena`}></div>
                <div className="result">
                    <h3 className="result-message">{this.props.message}</h3>
                    <button className="button replay icon-btn" onClick = {() => this.props.replay()}>replay</button>
                </div>
                <div className={`${this.props.comp1} arena`}></div>
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
                    <div className={`${this.props.pick} arena`}></div>
                    <div className={`${this.props.comp1} arena`}></div>
                    <div className={`${this.props.comp2} arena`}></div>
                </div>

            </div>
        );
    }
}