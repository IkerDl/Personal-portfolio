import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/projectsList.scss'; // Importa el archivo de estilos SCSS

const ProjectsList = () => {
    const [portfolioProjects, setPortfolioProjects] = useState({
        data: []
    });

    useEffect(() => {
        getAllProjects();
    }, []);

    const getAllProjects = () => {
        axios
            .get("https://ikerdelg.devcamp.space/portfolio/portfolio_items")
            .then((response) => {
                setPortfolioProjects({ data: response.data.portfolio_items });
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    };

    return (
        <div className='projects-container'>
            <h1>Mis proyectos</h1>
            <div className='projects-wrapper'>
                {portfolioProjects.data.map((project) => (
                    <div className='card' key={project.id}>
                        <div className='card-content'>
                            <div className='banner-holder'>
                                <div 
                                    className='banner'
                                    style={{
                                        backgroundImage: `url(${project.thumb_image_url})`
                                    }}
                                ></div>
                            </div>
                            <div className='container-fluid content-holder'>
                                <div className='inner-content'>
                                    <h2 className='title'>{project.name}</h2>
                                    <div className='description'>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
