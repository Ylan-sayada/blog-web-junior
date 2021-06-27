import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoundedIcone from '../components/ect/RoundedIcone';
import { CircularProgress } from '@material-ui/core';
import me from '../../ressources/img/me.jpeg';
import FineSep from '../components/sep/FineSep';
import SocialPanel from './SocialPanel';
import MessageInterface from '../components/ect/MessageInterface';
import axios from 'axios';
import isUndefined from '../../utils/isUndefined';


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
    likeSum: number,
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
    likeSum: 0,
}
export default function Article(props: { article?: propsArticle, remoteMode?: boolean }) {
    let { id } = useParams<{ id: string }>();
    const [article, setArticleWithID] = useState(props.remoteMode ? articleByDefault : (props.article || articleByDefault));
    const [loadingMode, setLoadingMode] = useState({
        inLoad: isUndefined(props.remoteMode),
        is404: false
    });


    useEffect(() => {


        if (id) {
            axios.get(`http://localhost:3000/api/article/${id}`)
                .then((res: any) => {

                    if (res.data) {

                        setArticleWithID({ ...res.data });
                        setLoadingMode({
                            inLoad: false,
                            is404: false
                        });
                    } else {

                        setLoadingMode({
                            inLoad: false,
                            is404: true
                        })

                    }




                })
                .catch((err) => {
                    console.log(err);
                })

            document.body.style.backgroundColor = "#eeeeee";
        }
        return () => {

            document.body.style.backgroundColor = "initial";
        }

    }, [id])
    let updateLikeToServ = () => {

    }
    return (
        <React.Fragment>


            {loadingMode.inLoad ?
                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </div>
                :
                loadingMode.is404 ?
                    <div><p>404</p></div>
                    :
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
                            <div className="display-article" dangerouslySetInnerHTML={{ __html: article.content }} />
                            <FineSep />
                            <SocialPanel serverReq={updateLikeToServ} viewNum={Number(article.viewNum)} commentsNum={Number(article.commentsNum)} likeSum={Number(article.likeSum)} />
                            <FineSep />
                            <MessageInterface id={`${article._id}`} />
                        </div>

                    </div>
            }
        </React.Fragment>
    )

}
