import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectLists } from '../helpers/ProjectList';

import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {ProjectLists.map((project, idx)  => {
        return <ProjectItem id={idx}  name={project.name} image={project.image}/>
      })}
      </div>
    </div>
  )
}

export default Projects;