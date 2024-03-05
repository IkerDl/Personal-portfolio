import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { SiGmail } from "react-icons/si";


const Modal = () => {

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

    return (
        <div>
            {/* {modalIsOpen ? <h1>Is opened</h1>: <h1>Is closed</h1>}
            <button onClick={openModal}>
                {modalIsOpen ? 'Close modal': 'Open modal'}
                </button> */}

            <ReactModal
                isOpen={modalIsOpen}
            
               
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>:</h2>
                
                <h3>{<SiGmail />} Iker.dlp.21@gmail.com</h3>

                <button onClick={openModal}>close</button>
                <text>Mi email de contacto: Iker.dlp.21@gmail.com </text>
                <div>I am a modal</div>
                <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
                </form>
            </ReactModal>
        </div>
    );
}

export default Modal;
