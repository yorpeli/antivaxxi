import React , { useContext } from 'react';
import hillerContext from '../context/hillerContext';


const Message = ()=>{
    const {mehasen, vaccine,org,  whyNot, mamlitz,charlatan, lastName, prof, osek,randYear, prof2,via } = useContext(hillerContext);
    const opening =`קודם כל חשוב לי להגיד שאני לא נגד חיסונים ואני ${mehasen} בכל החיסונים מלבד ${vaccine}.  `;
    const consult =`ב${org} דוחפים לכם חיסונים אבל אני רוצה שתשאלו את עצמכם אם זה נשמע לכם הגיוני ${whyNot}. במקום לבזבז זמן על שטויות אני מאד ${mamlitz} ${charlatan}. שזה משהו שהממסד ממש לא רוצה שתעשו.`;
    const summary =`כמובן שתמיד עדיף להתייעץ עם ${prof}. עדיף עם מומחים בתחום כדי שלא בטעות תטופלו על ידי שרלטנים. רק במקרה אני ${prof} כבר מעל ${randYear} שנה בשיטת ${lastName} ויש לי קליניקה מצליחה מאד בתחום. `;
    const me=`אם אתם מעוניינים, בשעות הפנאי אני גם ${osek} ב${prof2} באמצעות ${via} .`;
    return(
    <div>
        <p>{opening}</p>
        <p>{consult}</p>
        <p>{summary}</p>
        <p>{me}</p>
    </div>   
    );
};

export {Message as default};