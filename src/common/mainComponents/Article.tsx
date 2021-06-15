import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RoundedIcone from '../components/ect/RoundedIcone';
import me from '../../ressources/img/me.jpeg';
import FineSep from '../components/sep/FineSep';
import SocialPanel from './SocialPanel';
import MessageInterface from '../components/ect/MessageInterface';


interface propsArticle {
    id: number,
    img: string,
    author: string,
    title: string,
    desc: string,
    content: any,
    publishDate: Date,
    commentsNum: number,
    viewNum: number,
    likeNum: number,
    column?: boolean
}

export default function Article(props: { article?: propsArticle }) {
    let articleWithID = {
        id: 0,
        author: "אילן סיאדה",
        img: "https://picsum.photos/200/300",
        title: "lorem ipsum",
        desc: "lorem ipsum",
        content: "lorem ipsum",
        publishDate: new Date(),
        commentsNum: 4,
        viewNum: 50,
        likeNum: 2,
    }
    let article = props.article || articleWithID;

    useEffect(() => {

        document.body.style.backgroundColor = "#eeeeee";
        return () => {
            document.body.style.backgroundColor = "initial";
        }
    }, [])
    return (
        <div className="article" dir="rtl">
            <div className="head-article" style={{ backgroundImage: `url(${article.img})` }}>
                <div className="shadow-border">
                    <h1>{article.title}</h1>
                    <div className="publication-desc">
                        <RoundedIcone image={me} />
                        <div className="text-desc">
                            <span className="author-name">{article.author}</span>
                            <span className="sub-desc" >פורסם ב-{article.publishDate.toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content">
                <h3>{article.desc}</h3>
                <div>{article.content}</div>
                <FineSep />
                <SocialPanel viewNum={article.viewNum} commentsNum={article.commentsNum} likeNum={article.likeNum} />
                <FineSep />
                <MessageInterface id={`${article.id}`} />
            </div>

        </div>
    )
}
