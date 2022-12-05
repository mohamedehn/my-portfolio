import ProjectItem from "../components/ProjectItem"
import '../styles/Projects.css'
import {ProjectList} from '../helpers/ProjectList'
import React from "react"

function Projects() {

    return(
        <div className="projects" key={ProjectList.id}>
            <h1>My personal projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx)=>{
                    return (
                    <ProjectItem id={idx} name={project.name} image={project.image} key={project.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects