import React, { Component } from 'react'
import '../about/About.css';
export default class About extends Component {
    render() {
        return (
            <div>
                <h2 className="about-title"># About Me</h2>
                <div className="about">
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint possimus error explicabo, at autem illo iste a quae
                consectetur dolorem esse quasi. Ab, consequatur in. Quo nostrum culpa facere aliquid!</p>
                    </div>
                    <div className="image">
                        <img src="\assets\selfie.png"></img>
                    </div>
                </div>
                <div className="skills">
                    <div className="card 1">
                        <h4> # Frontend</h4>
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="card 2">
                        <h4> # Backend</h4>
                        <ul className="skills-list">
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>NodeJS</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="card 3">
                        <h4> # Other</h4>
                        <ul className="skills-list">
                            <li>Git / Github</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
