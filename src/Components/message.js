import React , { useContext } from 'react';

import hillerContext from '../context/hillerContext';


const Message = ()=>{
    const { lastName, prof, osek,randYear, prof2,via } = useContext(hillerContext);
    const summary =`כמובן שתמיד עדיף להתייעץ עם ${prof}. עדיף עם מומחים בתחום כדי שלא בטעות תטופלו על ידי שרלטנים. רק במקרה אני ${prof} כבר מעל ${randYear} שנה בשיטת ${lastName} ויש לי קליניקה מצליחה מאד בתחום. בשעות הפנאי אני גם ${osek} ב${prof2} באמצעות ${via}.`;

    return(
        
        <p>{summary}</p>
        
    );
};

export {Message as default};