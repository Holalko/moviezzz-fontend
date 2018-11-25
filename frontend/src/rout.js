import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";

class Rout extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={HomePage}/>
                    <Route path="/topics" component={HomePage}/>
                </div>
            </Router>
        )
    }

}

export default Rout;