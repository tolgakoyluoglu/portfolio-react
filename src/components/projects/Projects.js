import React, { Component } from 'react'
import '../projects/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <section id="section-project">
                <div className="project-container">
                    <div className="projects">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\recipe.png" alt="recipe"></img>
                            </div>
                            <div className="project-text">
                                <h4>Recipe App Front/Back-end</h4>
                                <p>A website created with Angular and Laravel. The user can search for recipes and register a account on the website. The backend is managed by my own API, the recipes are from edamam.com</p>

                                <form>
                                    <button formaction="http://recipe.tolgakoyluoglu.chas.academy">Go to site</button>
                                    <button formaction="https://github.com/tolgakoyluoglu">Code</button>
                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\weather.png" alt="weather"></img>
                            </div>
                            <div className="project-text">
                                <h4>Weather App</h4>
                                <p>Website that show's weather based on users location, users can also search for a city to see the current weather, 8 day forecast aswell as every third hour for the next 24h. Created with React.</p>
                                <form>
                                    <button formaction="http://tolgakoyluoglu.chas.academy/u08">Go to site</button>
                                    <button formaction="https://github.com/tolgakoyluoglu">Code</button>
                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\static.png" alt="static"></img>
                            </div>
                            <div className="project-text">
                                <h4>Static Website</h4>
                                <p>Website created with HTML/CSS</p>
                                <form>
                                    <button formaction="http://tolgakoyluoglu.chas.academy/u01">Go to site</button>
                                    <button formaction="https://github.com/tolgakoyluoglu">Code</button>
                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\hangman.png" alt="hangman"></img>
                            </div>
                            <div className="project-text">
                                <h4>Hangman</h4>
                                <p>Hangman with Vanilla JS, HTML, CSS</p>
                                <form>
                                    <button formaction="http://tolgakoyluoglu.chas.academy/u02">Go to site</button>
                                    <button formaction="https://github.com/tolgakoyluoglu">Code</button>
                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\mashup.png" alt="mashup"></img>
                            </div>
                            <div className="project-text">
                                <h4>Api Mashup</h4>
                                <p>Photo search website. Working with two API's on this site. Created with JavaScript, HTML, CSS</p>
                                <form>
                                    <button formaction="http://tolgakoyluoglu.chas.academy/u03">Go to site</button>
                                    <button formaction="https://github.com/tolgakoyluoglu">Code</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
