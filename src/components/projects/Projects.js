import React, { Component } from 'react'
import '../projects/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className="project-container">
                <div className="projects">
                    <h2># My Projects</h2>
                    <div className="project-card">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nulla.</p>
                    </div>
                    <div className="project-card">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, reiciendis.</p>
                    </div>
                    <div className="project-card">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deleniti.</p>
                    </div>
                </div>
            </div>
        )
    }
}
