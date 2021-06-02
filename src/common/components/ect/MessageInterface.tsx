import React from 'react'
import MessageForm from '../../vendorComponents/materialUi/input/MessageForm'

export default function MessageInterface() {
    return (
        <div className="message-interface">
            <h3>הוסף תגובה</h3>
            <MessageForm action="/api/sendMessage" />
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
        </div>
    )
}
