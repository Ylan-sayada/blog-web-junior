import React, { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import RoundedIcone from '../components/ect/RoundedIcone';
import me from '../../ressources/img/me.jpeg';
import FineSep from '../components/sep/FineSep';
import SocialPanel from './SocialPanel';
import MessageInterface from '../components/ect/MessageInterface';

let article = {
    id: 1,
    img: "https://picsum.photos/300/300",
    title: "פוסט נחמד",
    author: "אילן סיאדה",
    desc: "הפוסט הזה נועד לבדיקה.נראה טוב ????",
    publishDate: new Date(),
    commentsNum: 4,
    viewNum: 50,
    likeNum: 2
}
// interface propsArticle {
//     id: number,
//     img: string,
//     title: string,
//     desc: string
//     publishDate: Date,
//     commentsNum: number,
//     viewNum: number,
//     likeNum: number,
//     column?: boolean
// }
export default function Article() {
    useEffect(() => {
        document.body.style.backgroundColor = "#eeeeee";
        return () => {
            document.body.style.backgroundColor = "initial"
            // Anything in here is fired on component unmount.
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

                <h3>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרע </h3>
                <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
                <h3>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרע </h3>
                <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
                <FineSep />
                <SocialPanel viewNum={article.viewNum} commentsNum={article.commentsNum} likeNum={article.likeNum} />
                <FineSep />
                <MessageInterface />
            </div>

        </div>
    )
}
