import React , { useContext } from 'react';
import { profession, profession2,treatVia } from '../values/values';
import hillerContext from '../context/hillerContext';
import getItemFromArray from '../values/returnValue';



const prof = getItemFromArray(profession);
const randYear = Math.floor(Math.random() * 40) + 11;
const prof2 = getItemFromArray(profession2);
const via = getItemFromArray(treatVia);

const Message = ()=>{
    const { lastName } = useContext(hillerContext);
    const finalString =`כמובן שתמיד עדיף להתייעץ עם ${prof}. עדיף עם מומחים בתחום כדי שלא בטעות תטופלו על ידי שרלטנים. רק במקרה אני ${prof} כבר מעל ${randYear} שנה ויש לי קליניקה מצליחה מאד בתחום. בשעות הפנאי אני גם עוסקת ב${prof2} באמצעות ${via} בשיטת ${lastName}. `;

    return(
        
        <p>{finalString}</p>
        
    );
};

export {Message as default};