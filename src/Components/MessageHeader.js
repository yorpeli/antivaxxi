import React , { useContext } from 'react';
import hillerContext from '../context/hillerContext';
import Tmuna from '../Components/Image';

const MessageHeader = ()=>{
    const {name, lastName} = useContext(hillerContext);
    return(
        <div className='row'>
            <Tmuna className = 'col-2'/>
            <p className = 'col-10 headers'>{`${name} ${lastName}`}</p>
        </div>
    );
};

export {MessageHeader as default}