import React from 'react';
import "./Img.scss";

export default function Img(props: { src: string }) {
    return (
        <div className="img-div" style={{ backgroundImage: `url(${props.src})` }}></div>
    )
}
