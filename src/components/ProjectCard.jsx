import React from 'react'
import { Link } from 'react-router-dom'

const FormatDescription = (description) => {
    return description.substring(0, 50) + "..."
}

const ProjectCard = (props) => {
    const { project, onEdit } = props

    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    return (
        <div className='card'>
            <img src={project.imageUrl} alt={project.name} />
            <section className="section-dark">
                <Link to={"/posts/" + project.id}>

                    <h5 className='strong'>
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{FormatDescription(project.description)}</p>
                    <p>Tanggal : {project.pubDate.toLocaleString()}</p>
                    
                    <button onClick={() => handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Link
                    </button>

                </Link>
                <a href={project.link} target='_blank'>
                <button>
                    <span className="icon-edit"></span>
                    Link
                    </button>
                </a>
            </section>
        </div>
    )
}


export default ProjectCard
