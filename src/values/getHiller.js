import { lastName, gender, namesF, namesM } from '../values/hillers';
import { professionM, professionF } from '../values/values';
import { profession2,treatVia } from '../values/values';
import getItemFromArray from '../values/returnValue';

const getHiller = ()=>{
    const genderHiller = getItemFromArray (gender);
    const profession = genderHiller ==='f'? (getItemFromArray(professionF)) : (getItemFromArray(professionM));
    const randYear = Math.floor(Math.random() * 40) + 11;
    const prof2 = getItemFromArray(profession2);
    const via = getItemFromArray(treatVia);

    return {
        age:43,
        name : genderHiller ==='f'? (getItemFromArray(namesF)) : (getItemFromArray(namesM)),
        lastName:getItemFromArray(lastName),
        gender: genderHiller,
        prof: profession,
        osek: genderHiller ==='f'? ('עוסקת'):('עוסק'),
        randYear,
        prof2,
        via,
        image: '../Assets/111.jpg'
    };

};

export {getHiller as default};