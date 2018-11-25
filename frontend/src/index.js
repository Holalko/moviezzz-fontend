import React from "react";
import {render} from "react-dom";

import App from "./App";
import Store from "./stores";
import {Provider} from "mobx-react";
import HomePage from "./pages/HomePage";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";


render(
    <Provider {...Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/movie/:value" component={MoviePage}/>
                <Route path="/topics" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


