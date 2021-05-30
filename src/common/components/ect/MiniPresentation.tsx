import React from 'react'
import RoundedIcone from './RoundedIcone'

export default function MiniPresentation(props:any){
    return (
        <div className="mini-presentation">
            <h3 style={{color:"black"}}>{props.name}</h3>
            <span className="sub-desc">{props.titleDesc}</span>
            <RoundedIcone width="80px" image={props.image}/>
            <p>{props.desc}</p>
        </div>
    )
}
