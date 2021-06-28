import React from 'react'
import { Link } from 'react-router-dom';
import Img from '../Img';
import SocialPanel from '../SocialPanel';
import "./PreviewArticle.scss";
type propsArticle = {
    _id: number | string,
    img: string,
    title: string,
    desc: string
    publishDate: string,
    commentsNum: number | string,
    viewNum: number | string
    likeSum: number | string,

}
export default function PreviewArticle(props: { article: propsArticle, column?: boolean }) {

    let { _id, img, title, desc, publishDate, viewNum, likeSum, commentsNum } = props.article;
    let socialArrInfo = [viewNum, likeSum, commentsNum].map((data: string | number) => typeof data === "number" ? data : parseInt(data))

    let linkToArticle = `article/${_id}`;
    return (

        <div dir="rtl" className={`preview-article ${props.column ? 'column' : ''}`}>
            <Link to={linkToArticle}><Img src={img} /></Link>
            <div className="desc-preview">
                <Link to={linkToArticle}><h4>{title}</h4></Link>
                <span className="sub-desc" >פורסם ב-{new Date(publishDate).toLocaleDateString()}</span>
                <div className="desc"><p>{desc}</p></div>
                <SocialPanel viewNum={socialArrInfo[0]} commentsNum={socialArrInfo[2]} likeSum={socialArrInfo[1]} />
            </div>
        </div>

    )
}
