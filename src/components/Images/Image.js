import React from 'react'
import tjImage from '../../images/tjprofile.png';
import '../../components/Images/Image.css';


function Image() {
    return (
        <div>
            <img className='main--image' src={tjImage} alt='TJ Janus' />
        </div>
    )
}

export default Image
