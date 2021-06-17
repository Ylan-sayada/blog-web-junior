import React from 'react';
import { Link } from 'react-router-dom';
import isExternal from '../../../utils/isExternal';
declare namespace JSX {
   
    class ObjectContainsProps<ContainSomething>{
        props:ContainSomething;
    }
}
interface ContainUrl{
    link : string;
}
/**
 * @param El React element we want to add url 
 * @param url Url added to the El 
 * @returns 
 */
function WithLink(El:React.ReactElement,url?:string):React.ReactElement;
/**
 * @param El React element we want to add url should contain link props
 * @returns 
 */
function WithLink (El:JSX.ObjectContainsProps<ContainUrl>,url:string=""):React.ReactElement{
    let link = url === "" ? El.props.link : url ;
    let Parent = isExternal(link) ?
    <a href={link} target="_blank" rel="noreferrer">{El}</a>   :   <Link to={link}>{El}</Link>
    return (
        <React.Fragment>
        {Parent}
        </React.Fragment> 
    )
}
export default WithLink
