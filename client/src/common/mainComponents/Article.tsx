import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoundedIcone from '../components/ect/RoundedIcone';
import me from '../../ressources/img/me.jpeg';
import FineSep from '../components/sep/FineSep';
import SocialPanel from './SocialPanel';
import MessageInterface from '../components/ect/MessageInterface';
import axios from 'axios';


interface propsArticle {
    _id: number,
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
let articleByDefault = {
    _id: 0,
    author: "",
    img: "https://picsum.photos/200/300",
    title: "",
    desc: "",
    content: "",
    publishDate: new Date(),
    commentsNum: 0,
    viewNum: 0,
    likeNum: 50,
}
export default function Article(props: { article?: propsArticle }) {
    const [article, setArticleWithID] = useState(props.article || articleByDefault);
    let { id } = useParams<{ id: string }>();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/article/${id}`)
            .then((res: any) => {

                setArticleWithID(res.data);

            })
            .catch((err) => {

                console.log(err, "sdsdssds");
            })
        document.body.style.backgroundColor = "#eeeeee";
        return () => {
            document.body.style.backgroundColor = "initial";
        }
    }, [id])
    let updateLikeToServ = () => {

    }
    return (
        <div className="article" dir="rtl">
            <div className="head-article" style={{ backgroundImage: `url(${article.img})` }}>
                <div className="shadow-border">
                    <h1>{article.title}</h1>
                    <div className="publication-desc">
                        <RoundedIcone image={me} />
                        <div className="text-desc">
                            <span className="author-name">{article.author}</span>
                            <span className="sub-desc" >פורסם ב-{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content">
                <h3>{article.desc}</h3>
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                <FineSep />
                <SocialPanel serverReq={updateLikeToServ} viewNum={Number(article.viewNum)} commentsNum={Number(article.commentsNum)} likeNum={Number(article.likeNum)} />
                <FineSep />
                <MessageInterface id={`${article._id}`} />
            </div>

        </div>
    )
}
