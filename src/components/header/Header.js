import React, { Component } from 'react'
import '../header/Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <h1>Tolga Köyluoglu</h1>
                    <ul>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </header>

        )
    }
}
