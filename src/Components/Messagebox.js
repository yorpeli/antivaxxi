import React from 'react';
import Message from './message';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';
import Tmuna from '../Components/Image';

import '../styles/components/_messagebox.scss';

class Messagebox extends React.Component {
    state = {
        hiller: getHiller()
    };

    render() {
    return(
        <hillerContext.Provider value = {this.state.hiller}>
        <div className='box col-6 offset-3'>
            <div className = 'row'>
                <div className='box_header col-12'>
                    <p>{`${this.state.hiller.name} ${this.state.hiller.lastName}`}</p>
                </div>
            </div>
            <div className='row'>
                <div className = 'box_body col-1'>
                    <Tmuna/>
                </div>
                <div classNameclear = 'box_body col-11'>
                    <Message/>
                </div>
            </div>
        </div>
        <button onClick={()=>this.setState({hiller: getHiller()})}>Refresh</button>
        </hillerContext.Provider>
    );
};
};

export {Messagebox as default};