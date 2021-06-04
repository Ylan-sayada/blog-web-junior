import React from 'react'

export default function Comments(props: { comments: { author: string, date: string, msg: string } }) {
    let { comments } = props;
    return (
        <div className="message">
            <h5>{comments.author}<br /><span className="sub-desc">פורסם ב-{comments.date}</span></h5>

            <div className="message-content">
                <p>{comments.msg}</p>
            </div>
        </div>
    )
}
