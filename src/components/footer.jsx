import React, { Component } from "react";
import '../styles/styles.css';

export default class Footer extends Component {
    render() {
        return (<footer className="footer">
            <div className="wrap">
                <div className="footer__inner">
                    <span>2021 © Rock, Scissors, Papper... and more</span>
                </div>
                <div className="social-list">
                    <a href="https://github.com/pannage" className="social-list__item" alt="github" target="_blank" rel="noreferrer">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2317/2317981.svg" className="social-list__item-img" alt="github-logo" title="github account pannage"/>
                    </a>
                    <a href="https://rs.school/js/" className="social-list__item" alt="rsschool">
                        <img src="../../assets/rs_school.svg" className="social-list__item-img rsschool-logo" alt="rsschool-logo"/>
                    </a>
                </div>
            </div>
        </footer>);
    }
}