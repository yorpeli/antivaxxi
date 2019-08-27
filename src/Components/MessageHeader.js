import React , { useContext } from 'react';
import hillerContext from '../context/hillerContext';

const MessageHeader = ()=>{
    const {name, lastName} = useContext(hillerContext);
    return(
        <div className='headers'>
            <p>{`${name} ${lastName}`}</p>
        </div>
    );
};

export {MessageHeader as default}