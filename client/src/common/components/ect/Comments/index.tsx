import React from 'react';
import './Comments.scss';
import { getFullDate, getFullTime } from '../../../utils';

export default function Comments(props: { comments: { author: string, date: Date, msg: string } }) {
    let { comments } = props;
    let date = new Date(comments.date);
    return (
        <div className="message anim-opacity">

            <h5>{comments.author} <br /> <span className="sub-desc" style={{ fontSize: "0.7rem" }}> פורסם ב-{getFullDate(date)} בשעה {getFullTime(date)}  </span></h5>

            <div className="message-content">
                <p>{comments.msg}</p>
            </div>
        </div>
    )
}
