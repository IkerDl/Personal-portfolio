import React, { useState }from 'react';
import logosinfondo from './../../assets/images/Prueba1.png'
import {Link, Navigate} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ReactModal from 'react-modal';
import { SiGmail } from "react-icons/si";

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
        <div className='navbar' style={{ backgroundColor:'#333', color: '#fff',  padding: '10px, 20px'}}>
            <div className='nav-link' 
                style={{display: 'flex', alignItems: 'center'}}>
                <div className='logo'>
                    <Link to={'/'}>
                        <img src={logosinfondo} alt='logo' onClick={Navigate('/')} style={{maxWidth:'150px', marginLeft:'20px', height:'55px'}}/>
                    </Link>
                </div>
                <div className='text-wrapper' style={{display: 'flex', justifyContent:'space-between', alignItems:'center', width:'100%', margin:'0 25px 0 40%'}}>
                    <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit',  }}><h3>Blog</h3></Link>
                    <a href='https://www.linkedin.com/in/iker-delgado-l%C3%B3pez-9b14a9193/' style={{textDecoration:'none', color: 'rgb(255, 255, 255)'}} >
                        <FaLinkedin style={{fontSize:'2.5em'}}/>
                    </a>
                    <a href='https://github.com/IkerDl?tab=repositories' style={{textDecoration:'none', color: 'rgb(255, 255, 255)' }} >
                        <FaGithub style={{fontSize: '2.5em'}} />
                    </a>
                
                    <button style={{ fontSize: '1.17em', fontWeight: 'bold', padding: '2px'  ,color:'#FFFFFF' , border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }} onClick={openModal}>
                        Let's talk 📭
                    </button>
                    <ReactModal
                        isOpen={modalIsOpen}               
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Cómo puedo ayudarte ?</h2>
                        <div>
                            {<SiGmail />} <a style={{textDecoration: 'none'}} href="mailto:iker.dlp.21@gmail.com">Contactar via email</a>
                        </div>
                        

                        <button style={{margin:'5px'}} onClick={openModal}>Close</button>
                    
                        
                    </ReactModal>
                
                </div>
               



            </div>
        </div>
    );
}

export default Header;
