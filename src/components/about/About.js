import React, { Component } from 'react'
import '../about/About.css';
export default class About extends Component {
    render() {
        return (
            <section id="section-about">
                <div>
                    <div className="about">
                        <div className="text">
                            <h2 className="about-title"># About Me</h2>
                            <p>Hello! My name is Tolga and i'm a fullstack developer student from Stockholm/Sweden. I'm currently studying my first year in Chas Academy to become a fullstack web developer. I really enjoy to code and i'm very passionate about developing and designing on the web.</p>
                            <p>Contact me: </p>
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
                        </div>
                        <div className="image">
                            <img src="\assets\selfie.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
