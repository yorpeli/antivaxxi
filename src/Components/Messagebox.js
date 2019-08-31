import React from 'react';
import Message from './message';
import MessageHeader from '../Components/MessageHeader';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';
import values from '../values/values';
import Loader from '../Components/Loader';
import uuid from 'uuid';
import SharetoFB from '../Components/sharetoFB'

import firebase from 'firebase/app';
import 'firebase/database';

class Messagebox extends React.Component {
    constructor(props){
        super(props);
        this.getvalues = this.getvalues.bind(this);
    }
    state = {
        hiller: getHiller(values,0), //TODO change to obj.
        updatedValues:null,
        error:false,
        shareID:0
    };
  
    componentDidMount (){
            const db = firebase.database();
            db.ref('values').once('value').then((snapshot)=>{
                snapshot.forEach((childSnapshot) => {
                    let array = [];
                    childSnapshot.forEach((granSnapshot) => {
                        array.push(granSnapshot.val());
                    });
                    this.setState((prevState)=>({
                        updatedValues: {
                            ...prevState.updatedValues,
                            [childSnapshot.key] : array}
                    }));
                });
            const getThis = this.state.updatedValues;
            const id = uuid();
            this.setState({
                hiller:getHiller(getThis, id),
                shareID:id
            });
            }).catch((e)=>{
                console.log('Something went wong');
                this.setState({error:true});
            });        
    };

    getvalues = ()=>{
        let getThis = values;
        if(this.state.updatedValues || !this.state.error){
            getThis = this.state.updatedValues;
        }
        const id = uuid();
        this.setState({
            hiller:getHiller(getThis, id),
            shareID:id
        });
    }

    render() {
            if (this.state.updatedValues === null) {
                if(this.state.error){
                    return(
                        <div className='box col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 '>
                        <p>Error</p>
                        </div>
                    )
                }else{
                    return(
                    <div>
                        <Loader/>
                    </div>
                    )
                }
            } else {
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
        <div className='row btn_row col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
            <div className ='btn_col'>
                <button className='btn-primary heb_btn' onClick={this.getvalues}>עוד אחד!</button>
            </div>
            <div className ='btn_col'>
               <SharetoFB id={this.state.shareID}/>
            </div>
        </div>
        </hillerContext.Provider>
    )};
};
};

export  {Messagebox as default};