import React from 'react';
import { Fab } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
export default function ExtendedBtn(props: { onClick?: any, customStyle?: CSSProperties, children: any }) {
    return (
        <Fab onClick={props.onClick} style={{ ...props.customStyle, boxShadow: 'none' }} variant="extended" aria-label="add">
            {props.children}
        </Fab>
    )
}
