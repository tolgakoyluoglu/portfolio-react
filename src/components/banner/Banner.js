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
                    <p>Hey! I'm Tolga a fullstack web develop student from Stockholm. I currently study at Chas Academy and looking for an internship with start 1st October 2019. See some of my recent projects down below or contact me if you have any questions.</p>
                </div>
                <div className="contact-logo">
                    <div class="box">
                        <a className="contact" href="https://github.com/tolgakoyluoglu">
                            <i class="fab fa-github-square fa-2x"></i>
                        </a>
                    </div>
                    <div class="box">
                        <a className="contact" href="mailto:tolgakoy1@gmail.com">
                            <i class="fas fa-envelope fa-2x"></i>
                        </a>
                    </div>
                    <div class="box">
                        <a className="contact" href="https://www.linkedin.com/in/tolga-k%C3%B6yluoglu-7483aa171/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="icon">
                    <a href="#section-project"> <i class="fas fa-chevron-circle-down"></i></a>
                </div>
            </div>
        )
    }
}
