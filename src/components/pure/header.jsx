import React, { useState }from 'react';
import logosinfondo from './../../assets/images/Prueba1.png'
import {Link, Navigate} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ReactModal from 'react-modal';
import { SiGmail } from "react-icons/si";

import '../../styles/headerStyle.scss';

ReactModal.setAppElement('#root');

const Header = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    let subtitle;
    

    const openModal = () => {
       modalIsOpen ? setIsOpen(false) : setIsOpen(true)
    }



    //TODO: Create a Styles file to save all the styles for tags, lyrics, etc...
    //TODO: A function that opens modal when user clicks on let's talk text
    


    return (
        <div className='navbar'>
            <div className='nav-link'>
                <div className='logo'>
                    <Link to={'/'}>
                        <img src={logosinfondo} alt='logo' onClick={Navigate('/')} />
                    </Link>
                </div>
                <div className='text-wrapper'>
                    <Link to="/blog"><h3>Blog</h3></Link>
                    <a href='https://www.linkedin.com/in/iker-delgado-l%C3%B3pez-9b14a9193/' >
                        <FaLinkedin className='linkedinIcon'/>
                    </a>
                    <a href='https://github.com/IkerDl?tab=repositories' >
                        <FaGithub className='githubIcon' />
                    </a>
                
                    <button onClick={openModal}>
                       <h3>Let's talk 📭</h3>
                    </button>
                    <ReactModal
                        
                        isOpen={modalIsOpen}               
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Cómo puedo ayudarte ?</h2>
                        <div className='modalsBody'>
                            {<SiGmail/>} <a id='gmailText' href="mailto:iker.dlp.21@gmail.com">Contactar con Iker</a>
                        </div>

                        <button onClick={openModal}>Cerrar</button>
                    
                        
                    </ReactModal>
                
                </div>
               



            </div>
        </div>
    );
}

export default Header;
