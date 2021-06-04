import React from 'react'
import MessageForm from '../../vendorComponents/materialUi/input/MessageForm'
import FineSep from '../sep/FineSep';
import AddIcon from '@material-ui/icons/Add';
import ExtendedBtn from '../buttons/ExtendedBtn';
let msg = { author: "hello", date: new Date().toLocaleDateString(), msg: " לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף" }
let msgList = [msg, msg, msg, msg, msg, msg];
let wait = async (id: string) => {
    return new Promise(() => {
        setTimeout(() => msgList, 2000);
    });
}
export default function MessageInterface() {
    console.log(wait("40"));
    return (
        <div className="message-interface">
            <h3>הוסף תגובה</h3>
            <MessageForm action="/api/sendMessage" />
            <FineSep dashed />
            <h3>תגובות (6)  </h3>
            <div className="message">
                <h5>גון דו<br /><span className="sub-desc">פורסם ב-{new Date().toLocaleDateString()}</span></h5>

                <div className="message-content">
                    <p> לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף</p>
                </div>
            </div>
            <div className="message">
                <h5>גון דו<br /><span className="sub-desc">פורסם ב-{new Date().toLocaleDateString()}</span></h5>
                <div className="message-content">
                    <p> לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף</p>
                </div>
            </div>
            <div className="message">
                <h5>גון דו<br /><span className="sub-desc">פורסם ב-{new Date().toLocaleDateString()}</span></h5>
                <div className="message-content">
                    <p> לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף</p>
                </div>
            </div>
            <div style={{
                display: 'flex', justifyContent: 'center'
            }}>
                < ExtendedBtn customStyle={{ backgroundColor: '#03a9f4', color: '#fff', margin: "20px 0" }}>
                    <span>הצג עוד</span>
                    <AddIcon />
                </ExtendedBtn>
            </div >
        </div >
    )
}
