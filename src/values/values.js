//import React, { useContext } from 'react';
//import valuesContext from '../context/ValuesContext';

// export const Vaccine = ()=>{
//    // const da = useContext(valuesContext.vaccine);
//     //const {name, lastName} = useContext(hillerContext);
//     return(
//       's'
//         // [
//         //     'MMR',
//         //     `רוטה`,
//         //     `אדמת`,
//         //     `ויטמין K`,
//         //     `פוליו מוחלש`,
//         //     `פוליו מומת`,
//         //     `חיסון החצבת`,
//         //     `חצבת. אה.. סליחה. פוליו, פוליו. התכוונתי לפוליו`
//         // ]
//     );
// };

const values = {
    vaccine:[
        'MMR',
        `רוטה`,
        `אדמת`,
        `ויטמין K`,
        `פוליו מוחלש`,
        `פוליו מומת`,
        `חיסון החצבת`,
        `חצבת. אה.. סליחה. פוליו, פוליו. התכוונתי לפוליו`
    ],
    org:[
        `מטרד הבריאות`,
        `מדאע"ש`,
        `דף של הדוקטור`,
        `"ממסד" הרפואי`,
        `שלוחות של משרד הבריאות`,
        `ממשל`
    ],
    whyNot:[
        `להזריק לילדים שאריות של עוברים קווקזים`,
        `להכניס לגוף של הילדים כימיקלים`,
        `לעבור את הכביש במעבר חציה`,
        `שכדור הארץ עגול`,
        `לעשות ניסויים על הקטנטנים שלכם`
    ],
    charlatan:[
        'לפנות לד"ר לביאה גבני',
        `לקבוע פגישה אצל ד"ר אמנטל (רק 900 שקל לפגישה הראשונה)`,
        `לראות סרטונים של סוזן המפריז`,
        `לעשות מנוי לעלונים של דל ביגטרי`,
        `לתרום לעמותה`,
        `לקנות את הספר שלי`,
        `להחזיר את כל החיסונים שקיבלתם ומייד!`,
        `להירגע, לשים את הילדים בבייביסיטר ולצאת למסיבת הדבקה`,
        `לא להתרגש מכל מחלה שממציאים לנו כל יום`,
        `לבוא לכנס החיסונים הגדול שאני משתתף בו`,
        `להירשם ללימודי רפואה במסלול המקוצר במכללת יוטיוב. למדתי שם המון`
    ],
    professionF:[
        'הומאופתית',
        'אוסתאופתית',
        'נטורופתית',
        `מדקרת`,
        `מאבחנת הוליסטית`,
        `קואצ'רית`,
        `מטפלת כללית`,
        `מרפאת סינית`,
        `רופאה קוריאנית`,
        `רפלקסולוגית אזניים`,
        `מאבחנת עפעפיים`,
        `מטפלת בלק ג'ל`
    ],
    professionM:[
        'הומאופת',
        'אוסתאופת',
        'נטורופת',
        `מדקר`,
        `מאבחן הוליסטי`,
        `קואצ'ר`,
        `מטפל כללי`,
        `מרפא סיני`,
        `מרפא קוריאני`,
        `רפלקסולוג`,
        `מאבחן באמצעות עפעפיים`,
        `שיפוצניק`
    ],
    profession2:[
        'ריפוי בעיסוק',
        'הפריה חוץ גופית',
        'יעוץ שינה לאוגרים',
        'טיפולי שיניים',
        'ערבי שירה ו-ויפסאנה',
        'יישור חבלים',
        "ג'גלינג",
        'עבודה סוציאלית',
        `עירסול חמוסים`,
        `אבחון כללי מאד`,
        `תקשור עם סוללות`,
        `אבחון`,
        `הכנה לטסט`,
        `ניקוי אנרגיות כללי`,
        `ניקוי אנרגיות פרטני`,
        `רפלקסולוגיה`,
        `תיקון סדקים בנפש`,
        `ביטוחי הילה`,
        `תיקשור`
    ],
    treatVia:[
        `עטלפים`,
        `שיני שום`,
        'אבטיחים',
        'שרשראות שעועית',
        'נעלי קיפי',
        'קלפי טאקי',
        'שערים ישנים של פנאי פלוס',
        'שאריות בלורית של יאיר לפיד',
        'מדבקות הלו קיטי',
        'ערגליות תות',
        `איי ליינר`,
        `השעון הדובר`,
        `שירים של סטטיק ובנאל`,
        `מים כחולים של וישרים`,
        `קופסאות ריקות של קרמסימו`,
        `הד אנד שולדרס`,
        `מפיות "בתאבון"`,
        `עמודים 2-6 בספר הצבים`,
        `שקפקפי ניינטיז`
    ]
    // HashTags =[
    //     `#גםאנידורששקיפות`,
    //     `#חיסוניםזהלאמשהו`,
    //     `#צביםצבים`,
    //     `#בחירהמושכלתההופעה`,
    //     `#שתיטיפותמים`,
    //     `#אנרגיהבחינם`,
    //     `#סטטיק`,
    //     `#חצבתזהסבבה`,
    //     `#מחוסגםכןאלה`,
    //     `#לאחוסנתיויצאתיאחלה`
    // ]
}


//const db = firebase.database();
//db.ref('values/vaccine').push(`MMR`);


export {values as default};