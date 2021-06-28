import React, { useEffect } from 'react'
import "./Modal.scss";
export default function Modal(props: { handleClose: any, children: any }) {
    useEffect(() => {
        document.body.classList.toggle("no-scroll");
        return () => {
            document.body.classList.toggle("no-scroll");
        }
    })
    return (
        <div className="modal" onClick={props.handleClose}>
            {props.children}
        </div>
    )
}
