import React, { useState, useRef } from 'react'
import { Button, TextField } from '@material-ui/core';
import { isEmail } from '../../../utils';
import "./NewsletterInput.scss";

export default function NewsletterInput(props: any) {
    let [error, setError] = useState(false);
    let input: any = useRef(null);
    let handlePost = (e: any) => {
        let err = isEmail(input.current.value) ? false : true;
        err ? setError(err) : props.sendState(true);

    }
    return (
        <React.Fragment>
            <div className="newsletter-input">
                <TextField

                    error={error}
                    label="הכנס דואל כאן"
                    helperText={error ? "מייל לא תקין" : ""}
                    inputRef={input}
                />
                <Button onClick={handlePost} style={{ backgroundColor: error ? "red" : "#03a9f4", width: "100%", color: "white" }}>שלח</Button>
            </div>
        </React.Fragment>
    )

}
