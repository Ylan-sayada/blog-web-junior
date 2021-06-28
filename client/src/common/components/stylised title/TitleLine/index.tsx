import React from 'react'
import { containsHeb } from '../../../utils';
import GetTitle from '../../ect/GetTitle';
import "./TitleLine.scss";
type ContainChildren<Type> = {
    children: Type;
    size: SizeMode
}
type SizeMode = 'very small' | 'small' | 'medium' | 'large' | 'extra large';

export default function TitleLine(props: ContainChildren<string>) {
    let initClass = containsHeb(props.children) ? "title-line heb" : "title-line eng";
    let initContent = containsHeb(props.children) ?
        <React.Fragment><span className="line" /><span className="content">{props.children}</span></React.Fragment>
        :
        <React.Fragment><span className="content">{props.children}</span><span className="line" /></React.Fragment>

    return (
        <React.Fragment>
            <GetTitle size={props.size} className={initClass}>{initContent}</GetTitle>
        </React.Fragment>
    );
}
