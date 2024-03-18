import React from 'react';
import Header from '../../components/pure/header';
import ProjectsList from '../../components/container/projectsList';
import BioSection from '../../components/pure/bioSection';
import Modal from '../../components/modals/modal';


const HomePage = () => {
    return (
        <div>
            <Header />
            <BioSection />
            <ProjectsList />
        </div>
    );
}

export default HomePage;
