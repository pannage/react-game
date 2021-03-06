import React, { Component } from "react";
import '../styles/styles.css';


export default class Statistic extends Component {

    getScore () {
        let currentLocalStorageItem = JSON.parse(localStorage.getItem('score'))
        return currentLocalStorageItem
    }

    render() {
        return  <div className="statistic-wrapper">
                    <ul>
                        {this.getScore().map((e) =>  {
                            return <li>{`${e.date.substring(2, 16)} Player: ${e.playerScore} Comp1: ${e.comp1Score} Comp2: ${e.comp2Score}`}</li>
                        })}
                    </ul>
                </div>
    }
}