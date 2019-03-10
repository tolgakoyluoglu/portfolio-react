import React, { Component } from 'react'
import '../header/Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section-project">Projects</a></li>
                        <li><a href="#section-about">About</a></li>
                    </ul>
                </nav>
            </header>

        )
    }
}
