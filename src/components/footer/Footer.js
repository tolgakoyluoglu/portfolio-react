import React, { Component } from 'react'
import '../footer/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section class="section-footer">
                    <div class="container-footer">
                        <div class="box">
                            <a href="https://github.com/tolgakoyluoglu">
                                <i class="fab fa-github-square fa-2x"></i>
                            </a>
                        </div>
                        <div class="box">
                            <a href="mailto:tolgakoy1@gmail.com">
                                <i class="fas fa-envelope fa-2x"></i>
                            </a>
                        </div>
                        <div class="box">
                            <a href="https://www.linkedin.com/in/tolga-k%C3%B6yluoglu-7483aa171/">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}
