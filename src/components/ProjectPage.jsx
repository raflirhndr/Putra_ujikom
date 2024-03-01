import React, { useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import ProjectDetail from './ProjectDetail';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
    const [loading, setLoading] = useState(false); // Fix the typo here
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        setLoading(true);
        projectAPI.find(id).then(data => {
            setProject(data);
            setLoading(false);
        })
        .catch((e) => {
            setError(e);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            <h1>Project Detail</h1> {/* Fix the typo in the heading */}
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>loading</p>
                </div>
            )}

            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert">
                                    {error}
                                </span>
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {project && <ProjectDetail project={project} />}
        </div>
    );
};

export default ProjectPage;
