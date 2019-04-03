import React, { Component } from 'react'
import '../banner/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-txt">
                    <h1>Tolga K - Web Developer</h1>
                </div>
                <div className="image">
                    <img src="\assets\selfie.png" alt=""></img>
                </div>
                <div className="about">
                    <p>Hi, I'm Tolga a fullstack web developer student from Stockholm. Have a look at some of my recent projects down below or contact me if you have any questions.</p>
                </div>
                <div className="contact-logo">
                    <div className="box">
                        <a className="contact" href="https://github.com/tolgakoyluoglu">
                            <i className="fab fa-github-square fa-2x"></i>
                        </a>
                    </div>
                    <div className="box">
                        <a className="contact" href="mailto:tolgakoy1@gmail.com">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                    </div>
                    <div className="box">
                        <a className="contact" href="https://www.linkedin.com/in/tolga-k%C3%B6yluoglu-7483aa171/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="icon">
                    <a href="#section-project"> <i className="fas fa-chevron-circle-down"></i></a>
                </div>
            </div>
        )
    }
}
