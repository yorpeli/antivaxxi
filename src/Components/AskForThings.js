import React from 'react';
import moment from 'moment';
import * as firebase from 'firebase';


class AskForThings extends React.Component{
    state ={
        askFor:'',
        error:''
    }

onChangeMe = (e)=>{
    this.setState({
        askFor: e.target.value,
    });
}

clickMe = (e) => {
    const db = firebase.database();
    const today =  moment().format('MMMM Do YYYY').toString();
    if (this.state.askFor.trim().length > 3){
    db.ref('Suggestions/'+today+"/"+moment().format('HH:mm:ss a').toString()).set(this.state.askFor).then(()=>{
        this.setState({
            askFor:'',
            error:'...רשמנו לפנינו ונוסיף'
        })
        document.getElementById("input_vox").value = '';
        setTimeout(() => {
            this.setState({
                error:``
            })  
        }, 5500);
        
    });
    } else {
        this.setState({
            error:`אופסי... משהו לא הסתדר`
        })
        setTimeout(() => {
            this.setState({
                error:`שננסה שוב?`
            })  
        }, 3000);
        setTimeout(() => {
            this.setState({
                error:``
            })  
        }, 5500);
        
    }
}

render(){
    return(
        <div>
            <div className ='input_box col-10 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
                <button onClick={this.clickMe} className='btn btn-primary'>שלח/י</button>
                <input id="input_vox" onChange = {this.onChangeMe} className='input_line' type='text' placeholder=' תוסיפו גם...'/>
            </div>
            <p className='input_error col-4 offset-4'>{this.state.error}</p>
        </div>
    )};

};

export {AskForThings as default};