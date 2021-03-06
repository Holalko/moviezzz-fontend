import React from "react";
import {render} from "react-dom";

import App from "./App";
import Store from "./stores";
import {Provider} from "mobx-react";
import HomePage from "./pages/HomePage";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import "./styles/bootstrap.min.css";
import "./styles/custom.css";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import BorrowedPage from "./pages/BorrowedPage";
import AddMoviePage from "./pages/AddMoviePage";
import FollowedAndReservedPage from "./pages/FollowedAndReservedPage";


render(
    <Provider {...Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/home" component={App}/>
                <Route path="/movie/:value" component={MoviePage}/>
                <Route path="/borrowed" component={BorrowedPage}/>
                <Route path="/addMovie" component={AddMoviePage}/>
                <Route path="/followedAndReserved" component={FollowedAndReservedPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


