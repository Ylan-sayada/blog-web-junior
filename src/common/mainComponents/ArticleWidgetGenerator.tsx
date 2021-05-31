import React/*{useContext}*/ from 'react'
//import LangContext from '../../utils/LangContext';
import PreviewArticle from '../components/ect/PreviewArticle';
import FineSep from '../components/sep/FineSep';
import TitleLine from '../components/stylised title/TitleLine';

let article = {
    id: 1,
    img: "https://picsum.photos/300/300",
    title: "פוסט נחמד",
    desc: "הפוסט הזה נועד לבדיקה.נראה טוב ????",
    publishDate: new Date(),
    commentsNum: 4,
    viewNum: 50,
    likeNum: 2
}

let articles = [article, article, article]; //fetch('/api/blog/orderBy/${props.orderBy}=${props.number}')
// let lang = useContext(LangContext);
let langHandle = {
    "heb": {
        "latest": "פוסטים אחרונים",
        "oldest": "פוסטים ישנים",
        "hotest": "להיטים"
    }
}

type OrderBy = 'latest' | 'oldest' | 'hotest';

export default function ArticleWidgetGenerator(props: { orderBy: OrderBy, count?: number }) {
    //let lang = useContext(LangContext);
    let title = langHandle["heb"][props.orderBy];
    let finalRender = articles.map((element, index) => {
        return (
            <React.Fragment key={index}>
                <PreviewArticle article={element} />
                <FineSep />
            </React.Fragment>

        )
    });

    return (
        <div className={`${props.orderBy}-article`}>
            <TitleLine size="small">{title}</TitleLine>
            {finalRender}
        </div>
    )
}
