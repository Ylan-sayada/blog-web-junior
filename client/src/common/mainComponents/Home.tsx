import React from 'react'
import Header from './Header';
import Newsletter from './Newsletter';
import ArticleWidgetGenerator from './ArticleWidgetGenerator';
export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Newsletter />
            <ArticleWidgetGenerator orderBy='latest' count="5" />
        </React.Fragment>
    )
}
