import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/projectsList.scss'; 
import '../../styles/projectsCardsStyles.scss';

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
                            <div className='imgBx'>
                                <img className='banner' src={project.thumb_image_url} alt='projectImage'/>  
                            </div>
                            <div className='contentBx'>
                                <h2>{project.name}</h2>
                            </div>
                            <div className='sci'>
                                <p>{project.description}</p>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
