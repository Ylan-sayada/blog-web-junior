import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PreviewArticle from '../components/ect/PreviewArticle';
import TitleLine from '../components/stylised title/TitleLine';
import axios from 'axios';

export default function ArticleGenerator() {
    // let [orderBy, setOrderBy] = useState("latest");
    let [articles, setArticles] = useState([]);
    const [sumArticle, setsumArticle] = useState(0)
    let [index, setindex] = useState(0)

    useEffect(() => {
        axios.get(`api/articles/${index}/5/date-reverse`)
            .then((res: any) => {
                if (index === 0) {
                    setArticles(res.data[1]);
                    setsumArticle(res.data[0]);
                }
                else {
                    setArticles(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [index]);

    return (
        <div>
            <TitleLine size="medium">כל הפוסטים</TitleLine>
            {articles && articles.map(
                (element, index) => (
                    <React.Fragment key={index}>
                        <PreviewArticle article={element} column />
                    </React.Fragment>
                )

            )}
            <Pagination
                onClick={
                    (e: any) => {
                        let currentIndex = parseInt(e.target.innerText);
                        currentIndex === 1 ? setindex(0) : setindex((currentIndex - 1) * 5)
                    }
                }
                style={{ width: "max-content", margin: "25px auto" }}
                count={Math.ceil(sumArticle / 5)}
                size="small" />
        </div>
    )
}
