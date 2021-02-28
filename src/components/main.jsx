import React, { Component } from "react";
import PlayBoard from "./playboard.jsx";
import Menu from "./menu.jsx";
import '../styles/styles.css';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldSize: 3,
            playersSize: 2
        }
    }


    render() {
        return (
            <div className="main">
                <PlayBoard/>
                <Menu/>
            </div>
        );
    }
}