import React, {useContext} from 'react';
import hillerContext from '../context/hillerContext';

const Tmuna = () =>{
    const {img} = useContext(hillerContext); 
    return(
        <img src={ img } alt="Avatar" className='box_img' />
        
    );
};

export {Tmuna as default};