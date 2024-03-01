import React, { useState } from 'react'
import Project from './Project'

const ProjectForm = ({ onSave, onCancel, project: initialProject }) => {
    const [project, setProject] = useState(initialProject)
    const [errors, setErrors] = useState({
        name: "",
        description: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!isValid()) return
        onSave(project)
    }

    const handleChange = (event) => {
        const { type, name, value, checked } = event.target

        let updateValue = type === "checkbox" ? checked : value

        if (type === "number") {
            updateValue = Number(updateValue)
        }

        const change = {
            [name]: updateValue
        }

        let updateProject

        setProject((p) => {
            updateProject = new Project({ ...p, ...change })
            return updateProject
        })

        setErrors(() => validate(updateProject))
    }

    const validate = (project) => {
        let errors = { name: "", description: "" }

        if (project.name.length === 0) errors.name = "Name is Required"

        if (project.name.length > 0 && project.name.length < 3) errors.name = "Name need to be at least 3 character"

        if (project.description.length === 0) errors.description = "Description is Required"

        return errors
    }

    const isValid = () => {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 
        )
    }


    return (
        <div>
            <form action="" className="input-group vertical" onSubmit={handleSubmit}>
                <label htmlFor="name">Project Name</label>
                <input type="text" name="name" placeholder='Enter Name' value={project.name} onChange={handleChange} />
                <label htmlFor="description">Project Description</label>
                <textarea name="description" placeholder="Enter Description" cols="30" rows="10" value={project.description} onChange={handleChange}></textarea>
                <label htmlFor="isActive">Active ?</label>
                <input type="checkbox" name="isActive" value={project.isActive} onChange={handleChange} />
                <div className="input-group">
                    <button className="primary bordered medium">
                        Save
                    </button>
                    <span />
                    <button type="button" className='danger bordered medium' onClick={onCancel} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm