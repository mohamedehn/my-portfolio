import ProjectItem from "../components/ProjectItem"
import '../styles/Projects.css'
import {ProjectList} from '../helpers/ProjectList'
import React from "react"

function Projects() {

    return(
        <div className="projects">
            <h1>My personal projects</h1>
            <div className="projectList">
                {ProjectList.map((project)=>{
                    return (
                    <ProjectItem name={project.name} image={project.image}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects