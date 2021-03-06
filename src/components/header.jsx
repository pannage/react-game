import React, { Component } from "react";
import '../styles/styles.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href='https://github.com/pannage/react-game/pull/1' className="link">ссылка на Pull Request</a>
            </div>
        );
    }
}