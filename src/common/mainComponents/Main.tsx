import React from 'react';
import Home from './Home';
import { Switch, Route } from "react-router-dom";
import Blog from './Blog';
import About from './About';
import Article from './Article';
import AdminEditorSection from './AdminEditorSection';
export default function Main(): JSX.Element {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/article/:id" >
                    <Article />
                </Route>
                <Route path="/admin" >
                    <AdminEditorSection />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
