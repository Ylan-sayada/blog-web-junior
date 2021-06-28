import React, { useState, useEffect, useContext } from 'react';
import "./Newsletter.scss";
import TitleLine from '../../stylised title/TitleLine';
import MailIcon from '@material-ui/icons/Mail';
import NewsletterInput from '../../inputs/NewsletterInput';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import { getRect } from '../../../utils';
export default function Newsletter() {
    let [isSend, setSendState] = useState(false)
    let [initialHeight, setInitialHeight] = useState("");
    useEffect(() => {
        let { height } = getRect(document.querySelector(".newsletter-content")!);
        setInitialHeight(height + "px");
    }, [])

    return (
        <React.Fragment>
            <div className="newsletter">
                <TitleLine size="medium">הרשמה לניוזלטר</TitleLine>
                <MailIcon />
                {!isSend && <div className="newsletter-content">
                    <div className="roundedIcone"></div>
                    <h4 dir="rtl">רוצים לקבל עדכונים בדוא"ל ?</h4>
                    <p dir="rtl">עקבו אחריי !</p>
                    <NewsletterInput sendState={setSendState} />
                </div>}
                {isSend &&
                    <div className="newsletter send" style={{ height: initialHeight }}>
                        <p className="opacityTransition" dir="rtl">ההרשמה בוצעה בהצלחה <CloudDoneIcon className="sendSvg" /></p>
                    </div>
                }
            </div>

        </React.Fragment>
    )
}
