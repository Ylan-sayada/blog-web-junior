import React from 'react'
import { Link } from 'react-router-dom';
import Img from './Img';
import SocialPanel from '../../mainComponents/SocialPanel';
interface propsArticle {
    id: number,
    img: string,
    title: string,
    desc: string
    publishDate: Date,
    commentsNum: number,
    viewNum: number,
    likeNum: number,
    column?: boolean
}
export default function PreviewArticle(props: { article: propsArticle }) {

    let { id, img, title, desc, publishDate, column } = props.article
    let linkToArticle = `article/${id}`;
    return (

        <div dir="rtl" className={`preview-article ${column ? 'column' : ''}`}>
            <Link to={linkToArticle}><Img src={img} /></Link>
            <div className="desc-preview">
                <Link to={linkToArticle}><h4>{title}</h4></Link>
                <span className="sub-desc" >פורסם ב-{publishDate.toLocaleDateString()}</span>
                <div className="desc"><p>{desc}</p></div>
                <SocialPanel viewNum={props.article.viewNum} commentsNum={props.article.commentsNum} likeNum={props.article.likeNum} />
            </div>
        </div>

    )
}
