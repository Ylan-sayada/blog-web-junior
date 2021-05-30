import React from 'react';
import Home from './Home';
import { Switch, Route } from "react-router-dom";
import Blog from './Blog';
import About from './About';
export default function Main(): JSX.Element {
   
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/blog">
                    <Blog/>
                </Route>
            </Switch>
        </React.Fragment>
    )
}
