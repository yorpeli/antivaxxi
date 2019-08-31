import images from '../values/images';
import getItemFromArray from '../values/returnValue';
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/database';


const getHiller = (val, id)=>{
    const db = firebase.database();
    const {vaccine, charlatan, org, whyNot, professionM, 
        professionF,profession2,treatVia,
        lastName, gender, namesF, namesM} = val;
    const genderHiller = getItemFromArray (gender);
    const profession = genderHiller ==='f'? (getItemFromArray(professionF)) : (getItemFromArray(professionM));
    const randYear = Math.floor(Math.random() * 40) + 11;
    const prof2 = getItemFromArray(profession2);
    const via = getItemFromArray(treatVia);
    
    const hiller = {
        id,
        timeStamp: moment().format('MMMM Do YYYY, HH:mm:ss a'),
        vaccine: getItemFromArray(vaccine),
        mehasen:genderHiller ==='f'? ('מחסנת'):('מחסן'),
        mamlitz: genderHiller ==='f'? ('ממליצה'):('ממליץ'),
        charlatan: getItemFromArray(charlatan),
        name : genderHiller ==='f'? (getItemFromArray(namesF)) : (getItemFromArray(namesM)),
        org: getItemFromArray(org),
        whyNot: getItemFromArray(whyNot),
        lastName:getItemFromArray(lastName),
        gender: genderHiller,
        prof: profession,
        osek: genderHiller ==='f'? ('עוסקת'):('עוסק'),
        randYear,
        prof2,
        via,
        img: getItemFromArray(images)
    };
    if (process.env.NODE_ENV ==='production'){
        const today =  moment().format('MMMM Do YYYY').toString();
         db.ref("Hillers/"+id).set(hiller).catch((e)=>{console.log(e)});
         db.ref('Usage/'+today+"/"+moment().format('HH:mm:ss a').toString()).set(id);
    }
return hiller;
};

export {getHiller as default};