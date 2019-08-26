import React from 'react';
import Message from './message';
import hillerContext from '../context/hillerContext';
import '../styles/components/_messagebox.scss';

const hiller = {
    age:43,
    name:'אל השחר',
    lastName:'מצליח',
    gender:'f'
};

const Messagebox = () => {
    return(
        <hillerContext.Provider value = {hiller}>
        <div className='box col-6 offset-3'>
            <div className='box_header'>
                <p>{` ${hiller.name} ${hiller.lastName}`}</p>
            </div>
            <div className='row'>
                <div className = 'box_body col-1'>
                    <p>k</p>
                </div>
                <div className = 'box_body col-11'>
                    <Message/>
                </div>
            </div>
        </div>
        </hillerContext.Provider>
    );
};

export {Messagebox as default};