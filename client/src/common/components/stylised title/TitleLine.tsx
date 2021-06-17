import React from 'react'
import isHebrew from '../../../utils/isHebrew';
import GetTitle from '../ect/GetTitle';
interface ContainChildren<Type>{
    children:Type;
    size:SizeMode
}
type SizeMode = 'very small'| 'small' | 'medium' | 'large' | 'extra large';
export default function TitleLine(props:ContainChildren<string>){
    let initClass = isHebrew(props.children) ? "title-line heb" : "title-line eng";
    let initContent = isHebrew(props.children)?
     <React.Fragment><span className="line"/><span className="content">{props.children}</span></React.Fragment> 
     :
     <React.Fragment><span className="content">{props.children}</span><span className="line"/></React.Fragment>
     
    return (
        <React.Fragment>
            <GetTitle size={props.size} className={initClass}>{initContent}</GetTitle>
        </React.Fragment>
    );
}
