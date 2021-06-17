import React, { useEffect, useState } from 'react'
import PreviewArticle from '../components/ect/PreviewArticle';
import FineSep from '../components/sep/FineSep';
import TitleLine from '../components/stylised title/TitleLine';
import axios from "axios";
let langHandle = {
    "heb": {
        "latest": "פוסטים אחרונים",
        "oldest": "פוסטים ישנים",
        "hotest": "להיטים"
    }
}

type OrderBy = 'latest' | 'oldest' | 'hotest';

export default function ArticleWidgetGenerator(props: { orderBy: OrderBy, count?: number | string }) {
    let [articles, setArticles] = useState([]);
    useEffect(() => {
        let orderBy = {
            latest: "date",
            oldest: "date-reverse",
            hotest: "viewNum"
        }
        axios.get(`api/articles/0/${props.count}/${orderBy[props.orderBy]}`)
            .then((res: any) => {
                setArticles(res.data[res.data.length - 1]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.count, props.orderBy]);

    let title = langHandle["heb"][props.orderBy];

    return (
        <div className={`${props.orderBy}-article center`}>
            <TitleLine size="small">{title}</TitleLine>
            {articles && articles.map(
                (element, index) => (<React.Fragment key={index}>
                    <PreviewArticle article={element} />
                    <FineSep />
                </React.Fragment>
                )

            )}
        </div>
    )
}
