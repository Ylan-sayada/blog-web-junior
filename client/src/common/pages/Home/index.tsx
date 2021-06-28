import React from 'react'
import Header from '../../components/ect/Header';
import Newsletter from '../../components/ect/Newsletter';
import ArticleWidgetGenerator from '../../components/ect/ArticleWidgetGenerator';
export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Newsletter />
            <ArticleWidgetGenerator orderBy='latest' count="5" />
        </React.Fragment>
    )
}
