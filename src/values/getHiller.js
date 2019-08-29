import { lastName, gender, namesF, namesM } from '../values/hillers';
import images from '../values/images';
import getItemFromArray from '../values/returnValue';

const getHiller = (val)=>{
    const {vaccine, charlatan, org, whyNot, professionM, professionF,profession2,treatVia} = val;
    const genderHiller = getItemFromArray (gender);
    const profession = genderHiller ==='f'? (getItemFromArray(professionF)) : (getItemFromArray(professionM));
    const randYear = Math.floor(Math.random() * 40) + 11;
    const prof2 = getItemFromArray(profession2);
    const via = getItemFromArray(treatVia);

    return {
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
};

export {getHiller as default};