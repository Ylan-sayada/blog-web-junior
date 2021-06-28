import React from 'react';
import "./FineSep.scss";

export default function FineSep(props: { dashed?: boolean }) {
    return (
        <div className={`fine-sep ${props.dashed ? 'dashed' : ''}`} ></div>
    )
}
