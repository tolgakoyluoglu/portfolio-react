import React, { Component } from 'react'
import '../projects/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <section id="section-project">
                <div className="project-container">
                    <h2># Recent Projects</h2>
                    <div className="projects">
                    <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\lio.png" alt="imdb"></img>
                            </div>
                            <div className="project-text">
                                <h4>Lio Front/Backend</h4>
                                <p>React / Node.js / Redux</p>
                                <p>Most recent project made by me and a classmate. The application is built with MERN stack.</p>
                                <a href="https://github.com/tolgakoyluoglu/lio-frontend">Github Frontend</a>
                                <br />
                                <a href="https://github.com/tolgakoyluoglu/lio-backend">Github Backend</a>
                                <form>
                                    <button formAction="https://app-lio.herokuapp.com/">Go to site</button>

                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\imdb.png" alt="imdb"></img>
                            </div>
                            <div className="project-text">
                                <h4>IMDB Clone Front/Backend</h4>
                                <p>React / Node.js</p>
                                <p>MVC structure in Express. Auth with JWT. CRUD implementation for watchlist. Fetch to external API from backend for the movies</p>
                                <a href="https://github.com/tolgakoyluoglu/imdb-clone-frontend">Github Frontend</a>
                                <br />
                                <a href="https://github.com/tolgakoyluoglu/imdb-clone-backend">Github Backend</a>
                                <form>
                                    <button formAction="http://tolgakoyluoglu.chas.academy/tmdb">Go to site</button>

                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\recipe.png" alt="recipe"></img>
                            </div>
                            <div className="project-text">
                                <h4>Recipe App Front/Backend</h4>
                                <p>Angular / Laravel</p>
                                <p>Auth with JWT. Crud implementation for recipes. Fetch to external API from frontend for the recipes</p>
                                <a href="https://github.com/tolgakoyluoglu/imdb-clone-frontend">Github Frontend</a>
                                <br />
                                <a href="https://github.com/tolgakoyluoglu/imdb-clone-backend">Github Backend</a>
                                <form>
                                    <button formAction="http://recipe.tolgakoyluoglu.chas.academy">Go to site</button>

                                </form>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="\assets\weather.png" alt="weather"></img>
                            </div>
                            <div className="project-text">
                                <h4>Weather App</h4>
                                <p>Fetch to external API for displaying currently, weekly and daily forecast</p>
                                <p>React</p>
                                <a href="https://github.com/tolgakoyluoglu/08-weather-app-tolgakoyluoglu">Github</a>
                                <form>
                                    <button formAction="https://tolgakoyluoglu.github.io/weather-app/">Go to site</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
