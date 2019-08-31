import React from 'react';
import Message from './message';
import MessageHeader from '../Components/MessageHeader';
import getHiller from '../values/getHiller';
import hillerContext from '../context/hillerContext';
import Loader from './Loader';
import * as firebase from 'firebase';

class LoadedMessagebox extends React.Component {

    state = {
        hiller: null,
        updatedValues:null,
        error:false
    };
    componentDidMount(){
        const db = firebase.database();
        db.ref('Hillers/'+this.props.id).once('value').then((snapshot)=>{
                snapshot.forEach((childSnapshot) => {                     
                            this.setState((prevState)=>({
                                updatedValues: {
                                    ...prevState.updatedValues,
                                    [childSnapshot.key] : childSnapshot.val()}
                            }));
                        });                       
                        const val = this.state.updatedValues;                 
                        this.setState({
                            hiller:getHiller(val),
                            gotValues:`visible`
                        });
                    }).catch((e)=>{
                        console.log('Something went wong');
                        this.setState({error:true});
                    });
    };

    render() {
        if (this.state.updatedValues === null) {
            if(this.state.error){
                return(
                    <div className='box col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 '>
                        <div className = 'row'>
                            <div className='box_header col-12'>
                                <p>מר וונג</p>
                            </div>
                        </div>
                            <div className='row'>
                                <div className = 'box_body col-12'>
                                    <p>{`Something went wong... `}</p>
                                </div>
                            </div>
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
        <hillerContext.Provider value = {this.state.updatedValues}>
        {
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
        }
        </hillerContext.Provider>
    )};
};
};

export {LoadedMessagebox as default};