import React, { Component } from "react";
import '../styles/styles.css';

export class ChoiceThree extends Component {
    constructor(props) {
        super(props)
        this.keyPress = this.keyPress.bind(this)

        document.addEventListener('keyup', (e) => {
            this.keyPress(e);
        })
    }



keyPress (e) {
    if (e.key === '1') {
        this.props.start('rock')
    } else if (e.key === '2') {
        this.props.start('scissors')
    } else if (e.key === '3') {
        tthis.props.start('papper')
    }
}



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
    constructor(props) {
        super(props)
        this.keyPress = this.keyPress.bind(this)

        document.addEventListener('keyup', (e) => {
            this.keyPress(e);
        })
    }



    keyPress (e) {
        if (e.key === '1') {
            this.props.start('rock')
        } else if (e.key === '2') {
            this.props.start('scissors')
        } else if (e.key === '3') {
            this.props.start('papper')
        } else if ((e.key === '4')) {
            this.props.start('lizard')
        } else if ((e.key === '5')) {
            this.props.start('spock')
        }

}
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

