import React from 'react'
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
export default function MessageForm(props: { action: string }) {
    return (
        <form action={props.action} className="add-message-form" >
            <TextField label="שם מלא" />
            <TextField dir="ltr" label="מייל" />
            <TextField
                id="standard-textarea"
                label="תגובה"
                rows="4"
                multiline
            />
            <Button
                dir="ltr"
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
            >
                שלח
            </Button>
        </form>
    )
}
