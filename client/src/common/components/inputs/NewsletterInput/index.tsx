import React, { useState, useRef } from 'react'
import { Button, TextField } from '@material-ui/core';
import { buttonStyle, inputStyle } from '../../../../ressources/Mui-styles/InteractionStyle';
import { isEmail } from '../../../utils';
import "./NewsletterInput.scss";

export default function NewsletterInput(props: any) {
    let buttonClass = buttonStyle();
    let inputClass = inputStyle();
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
                    className={inputClass.root}
                    error={error}
                    label="הכנס דואל כאן"
                    helperText={error ? "מייל לא תקין" : ""}
                    inputRef={input}
                />
                <Button
                    className={buttonClass.root}
                    onClick={handlePost}
                >
                    שלח
                </Button>
            </div>
        </React.Fragment>
    )

}
