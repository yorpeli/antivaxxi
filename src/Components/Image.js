import React from 'react';
import images from '../values/images';
import getItemFromArray from '../values/returnValue';


const logo = getItemFromArray(images);
const Tmuna = () =>{
    return(
        <img src={ logo } alt="Avatar" className='box_img' />
        
    );
};

export {Tmuna as default};