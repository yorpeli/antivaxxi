import React from 'react';
import Message from './message';
import MessageHeader from '../Components/MessageHeader';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';


class Messagebox extends React.Component {
    state = {
        hiller: getHiller()
    };

    render() {
    return(
        <hillerContext.Provider value = {this.state.hiller}>
        <div className='box col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
            <div className = 'row'>
                <div className='box_header col-12'>
                <MessageHeader/>    
                </div>
            </div>
            <div className='row'>
                <div className = 'box_body col-12'>
                    <Message/>
                </div>
            </div>
        </div>
        <div className='row btn_row'>
            <div className ='btn_col col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
                <button className='btn-primary heb_btn' onClick={()=>this.setState({hiller: getHiller()})}>עוד אחד!</button>
            </div>
        </div>
        </hillerContext.Provider>
    );
};
};

export {Messagebox as default};