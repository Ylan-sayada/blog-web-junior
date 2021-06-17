import React, { useRef, useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import isEmail from '../../../../utils/isEmail';
export default function MessageForm(props: { id: string, action: string, postState: any }) {
    let errStateObject = {
        errOnMail: false,
        errOnName: false,
        errOnTxt: false
    }
    let [error, setError] = useState(errStateObject);
    const name = useRef(document.createElement("input"));
    const mail = useRef(document.createElement("input"));
    const text = useRef(document.createElement("input"));

    let sendComment = () => {
        let data = {
            name: name.current.value,
            mail: mail.current.value,
            date: new Date(),
            text: text.current.value,
            articleID: props.id
        }
        let err = Object.assign({}, errStateObject);
        err.errOnMail = isEmail(data.mail) ? false : true;
        err.errOnName = data.name.length > 10 || data.name.length === 0 ? true : false;
        err.errOnTxt = data.text.length === 0 ? true : false;
        let res = Object.values(err);

        if (!res.includes(true)) {
            axios.post(`${props.action}`, data)
                .then((res) => {
                    if (res.data)
                        props.postState(true);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else {
            setError(err);
        }

    };
    return (
        <React.Fragment>
            <form onSubmit={(e) => {
                e.preventDefault();
                sendComment();
            }} className="add-message-form"
            >
                <TextField
                    error={error.errOnName}
                    helperText={error.errOnName ? "ארוך מדיי(מעל 10 תווים)/ריק" : ""}
                    inputRef={name}
                    label="שם מלא" />
                <TextField
                    error={error.errOnMail}
                    label="הכנס דואל כאן"
                    helperText={error.errOnMail ? "מייל לא תקין" : ""}
                    inputRef={mail}
                />
                <TextField
                    error={error.errOnTxt}
                    helperText={error.errOnTxt ? "השדה ריק" : ""}
                    inputRef={text}
                    id="standard-textarea"
                    label="תגובה"
                    rows="4"
                    multiline
                />
                <Button
                    dir="ltr"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    שלח
                </Button>
            </form>
        </React.Fragment>
    )
}
