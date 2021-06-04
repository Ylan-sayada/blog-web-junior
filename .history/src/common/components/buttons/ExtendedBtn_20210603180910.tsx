import React from 'react';
import { Fab } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
export default function ExtendedBtn(props: { customStyle?: CSSProperties, children: any }) {
    return (
        <Fab style={{ ...props.customStyle, boxShadow: 'none' }} variant="extended" aria-label="add">
            {props.children}
        </Fab>
    )
}
