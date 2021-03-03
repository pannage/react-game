import React, { Component } from "react";
import '../styles/styles.css';

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state ={
            isDark: false,
            isModalVisible:false
        }


        this.keyPress = this.keyPress.bind(this)

        document.addEventListener('keyup', (e) => {
            this.keyPress(e);
        })
    }

    onThemeChange () {
        this.setState ({isDark: !this.state.isDark})
            document.body.classList.toggle('dark')


    }



    keyPress (e) {
        if((e.key === 'Q')||(e.key === 'q')) {
            this.props.setFieldSize(3)
        } else if ((e.key === 'W')||(e.key === 'w')) {
            this.props.setFieldSize(5)
        } else if ((e.key === 'A')||(e.key === 'a')) {
            this.props.setPlayersNum(2)
        } else if ((e.key === 'S')||(e.key === 's')) {
            this.props.setPlayersNum(3)
        } else if ((e.key === 'Escape')) {
            this.props.onStartNewGame()
        }

    }

    render() {
        return (
            <div className="menu-wrapper">
                                {
                    this.state.isModalVisible ? (
                        <div className="rules">
                            <div>Горячие клавиши:</div>
                            <div>1,2,3,4,5 - ваш выбор</div>
                            <div>q и w - выбор количества играков</div>
                            <div>a и s - выбор поля</div>
                            <div>esc - начать сначала</div>
                            <button onClick={() => this.setState({isModalVisible:false}) }>close</button>

                            Пожалуйста дайте еще 2 дня, ничего не успеваю! Я все доделаю.
                            Спасибо


                        </div>
                    ) : null
                }
                <button className="button  new-game-btn" onClick={() => this.setState({isModalVisible:true}) }>Rules</button>
                <button className="button new-game-btn" onClick={() => this.props.onStartNewGame()}>New Game</button>
                <div>
                    <div className="menu-txt">Size</div>
                    <button className="button points-3" onClick={() => this.props.setFieldSize(3)}></button>
                    <button className="button points-5" onClick={() => this.props.setFieldSize(5)}></button>
                </div>
                <div>
                    <div className="menu-txt">players</div>

                    <button className="button" onClick={() => this.props.setPlayersNum(2)}>2</button>
                    <button className="button" onClick={() => this.props.setPlayersNum(3)}>3</button>
                </div>
                <div>
                    <div className="switch_box box_3">
                    <div className="toggle_switch"  onClick = {() => this.onThemeChange()}>
                        <input type="checkbox" className="switch_3"/>
                        <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate" }} viewBox="0 0 168 80">
                            <path className="outer-ring"
                                d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z"
                                fill="none" stroke="#233043" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3"/>
                            <path className="is_unchecked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"/>
                            <path className="is_checked"
                                d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"/>
                        </svg>
                    </div>
                </div>
                </div>
                <button className="button icon-btn">query_stats</button>

            </div>
        );
    }
}