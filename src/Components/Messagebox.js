import React from 'react';
import Message from './message';
import MessageHeader from '../Components/MessageHeader';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';
import values from '../values/values';
import * as firebase from 'firebase';

class Messagebox extends React.Component {
    constructor(props){
        super(props);
        this.getvalues = this.getvalues.bind(this);
    }
    state = {
        hiller: getHiller(values),
        updatedValues:{},
        gotValues:false
    };
    
    getvalues =()=>{
        if(!this.state.gotValues){
            const db = firebase.database();
            console.log(db.ref('values/vaccine'));
            this.setState({
                hiller:getHiller(values),
                gotValues:true
            });
            console.log('1');
        }else{
            this.setState({hiller:getHiller(values)});
            console.log('2')
        }
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
                <button className='btn-primary heb_btn' onClick={this.getvalues}>עוד אחד!</button>
            </div>
        </div>
        </hillerContext.Provider>
    );
};
};

export {Messagebox as default};