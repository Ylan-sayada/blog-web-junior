import React, { useEffect, useState } from 'react'
import MessageForm from '../../vendorComponents/materialUi/input/MessageForm'
import FineSep from '../sep/FineSep';
import AddIcon from '@material-ui/icons/Add';
import ExtendedBtn from '../buttons/ExtendedBtn';
import { CircularProgress } from '@material-ui/core';
import Comments from './Comments';
let msg = { author: "John doe", date: new Date().toLocaleDateString(), msg: " לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף" }
let msgList = [msg, msg, msg, msg, msg, msg];
let getMsg = async (id?: string) => {
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msgList);
        }, 6000);
    });
    return await result;
}


export default function MessageInterface() {
    let [comments, setComments] = useState([]);
    let [numComToShow, setNumComToShow] = useState(3);
    useEffect(() => {
        getMsg()
            .then((result: any) => setComments(result));

    }, []);

    return (
        <div className="message-interface">
            <h3>הוסף תגובה</h3>
            <MessageForm action="/api/sendMessage" />
            <FineSep dashed />
            <h3>תגובות ({comments.length})  </h3>

            {comments.length === 0 ? <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}><CircularProgress /></div> : comments.filter((comment, index) => index < numComToShow).map((comment, index) => {
                return <Comments comments={comment} key={index} />
            })}
            <div style={{
                display: 'flex', justifyContent: 'center'
            }}>
                {numComToShow < comments.length && < ExtendedBtn onClick={() => setNumComToShow(numComToShow + 3)} customStyle={{ backgroundColor: '#03a9f4', color: '#fff', margin: "20px 0" }}>
                    <span>הצג עוד</span>
                    <AddIcon />
                </ExtendedBtn>}
            </div >
        </div >
    )
}