import React , { useContext } from 'react';
import hillerContext from '../context/hillerContext';
import {  FacebookShareButton, FacebookIcon } from 'react-share';

const SharetoFB = (props)=>{
    const {name, lastName, prof} = useContext(hillerContext);
    const hil = `${lastName} ${name} – ${prof} ויעוץ חיסונים`;
    return(
        <FacebookShareButton
        url={`antivaxxi.web.app/l/${props.id}`}
        quote={hil}
        className="btn_hover">
        <FacebookIcon
        size={32}
        round />
    </FacebookShareButton>

        // <div className='row'>
        //     <Tmuna className = 'col-2'/>
        //     <p className = 'col-10 headers'>{`${name} ${lastName}`}</p>
        // </div>
    );
};

export {SharetoFB as default}