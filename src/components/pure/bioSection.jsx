import React from 'react';
import profileImage from '../../assets/images/cvImageWithoutBG.png';
import backGroundImage from '../../assets/images/imagebck.jpeg';

const BioSection = () => {
    return (
        <div>
            <div className='bioContainer' style={{display:'flex',backgroundImage: `url(${backGroundImage})`, justifyContent: 'space-evenly', backgroundColor:'#fff', padding:'50px 20px' }}>
                <div className='text' style={{display:'grid', alignItems: 'center', paddingRight:'150px', paddingLeft: '150px'}}>
                    {/* <p>Aquí ira una pequeña descripción sobre mi ¿Quien es Iker?</p> */}
                    {/* <h1>Junior Full Stack Developer with an entrepreneurial spirit, an inquisitive mind, and limitless ambition.📈</h1> */}
                    <h1>Desarrollador Full Stack Junior con espiritu emprendedor, una mente inquisitiva y una ambición sin límites 📈</h1>
                </div>
                <div className='imgContainer' style={{ width: '70%', borderRadius: '50%'}}>
                    <img alt='profileImage' src={profileImage} style={{width: '250px', display:'block', borderRadius:'100px'}} />
                </div>
            </div>
        </div>
    );
}

export default BioSection;
