import React from 'react';
import Home from './Home';
import { Switch, Route } from "react-router-dom";
import Blog from './Blog';
import About from './About';
import Article from './Article';
import AuthPanel from './AuthPanel';
import AdminEditorSection from './AdminEditorSection';
import NotFound from './NotFound';
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
                <Route path="/member">
                    <AuthPanel />
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
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
