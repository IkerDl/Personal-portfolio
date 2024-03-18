import React from 'react';
import profileImage from '../../assets/images/cvImageWithoutBG.png';
import backGroundImage from '../../assets/images/imagebck.jpeg';
import '../../styles/bio.scss';

const BioSection = () => {
    return (
        <div className='bio-component'>
            <div className='bioContainer' style={{backgroundImage: `url(${backGroundImage})`}}>
                <div className='text'>
                    {/* <p>Aquí ira una pequeña descripción sobre mi ¿Quien es Iker?</p> */}
                    {/* <h1>Junior Full Stack Developer with an entrepreneurial spirit, an inquisitive mind, and limitless ambition.📈</h1> */}
                    <h1>Desarrollador Full Stack Junior con espiritu emprendedor, una mente inquisitiva y una ambición sin límites 📈</h1>
                </div>
                <div className='imgContainer'>
                    <img alt='profileImage' src={profileImage} />
                </div>
            </div>
        </div>
    );
}

export default BioSection;
