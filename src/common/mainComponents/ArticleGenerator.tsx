import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PreviewArticle from '../components/ect/PreviewArticle';
import TitleLine from '../components/stylised title/TitleLine';
let article = {
    id: 1,
    img: "https://picsum.photos/200/300",
    title: "פוסט נחמד",
    desc: "היי מחמכחמכ מכלכמכלמ כממ כמככמלג מכמכמ כמכחכ כממכחר קקקצ גצגצגצ גמגמ",
    content: "hello",
    publishDate: new Date(),
    commentsNum: 4,
    viewNum: 50,
    likeNum: 2,
    column: true
}
let articles = [article, article, article]; //fetch('/api/blog/orderBy/${props.orderBy}=${props.number}')

export default function ArticleGenerator() {
    let articleLength = 39;
    return (
        <div>
            <TitleLine size="medium">כל הפוסטים</TitleLine>
            <PreviewArticle article={articles[0]} />
            <PreviewArticle article={articles[0]} />
            <PreviewArticle article={articles[0]} />
            <Pagination style={{ width: "max-content", margin: "25px auto" }} count={Math.ceil(articleLength / 5)} size="small" />
        </div>
    )
}
