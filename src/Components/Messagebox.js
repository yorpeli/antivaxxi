import React from 'react';
import Message from './message';
import MessageHeader from '../Components/MessageHeader';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';
import Tmuna from '../Components/Image';

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
                <MessageHeader/>    
                </div>
            </div>
            <div className='row'>
                <div className = 'box_center col-2'>
                    <Tmuna/>
                </div>
                <div className = 'box_body col-10'>
                    <Message/>
                </div>
            </div>
        </div>
        <div className='row btn_row'>
            <div className ='btn_col col-6 offset-3 '>
                <button className='btn-primary heb_btn' onClick={()=>this.setState({hiller: getHiller()})}>עוד אחד!</button>
            </div>
        </div>
        </hillerContext.Provider>
    );
};
};

export {Messagebox as default};