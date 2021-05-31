import React from 'react'
import countDay from '../../../utils/countDay';

export default function CounterDay(props : {dateStart : Date,foundWork: boolean}){
    let dayElapsed = countDay(props.dateStart);
    let classState = props.foundWork?"green":"yellow";
    //also if the mission is accomplished the counter will continue to count day. 
    //to resolve this we should to stock the day that the mission is accomplished
    return (
        <div className={`counter-day ${classState}`}>
            <div>
                <p>{dayElapsed} <br/> <strong>{dayElapsed > 1?  "ימים" : "יום" }</strong></p>
            </div>
            
            <div>
                <p dir="rtl">מצב המשימה העיקרית </p>
                 <p className="bold">{props.foundWork ? "משימה הושלמה!" : "ממשיכים בהרפתקאות" } </p>
            </div>
        </div>
    )
}

