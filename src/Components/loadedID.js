import React from 'react';
import Header from './Header';
import LoadedMessagebox from './LoadedMessagebox';


function loadID(props) {
    const id = props.match.params.id;
    return (
      <div className="container">
        <Header/>
        <p></p>
        <LoadedMessagebox id={id}/>
        <div className='row btn_row'>
            <div className ='btn_col col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
                <button className='btn-primary heb_btn' onClick={()=>{props.history.push('/')}}
                    >אני רוצה גם!
                </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default loadID;
  //<Messagebox/>  