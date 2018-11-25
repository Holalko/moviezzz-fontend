import React, { Component } from 'react';
import "./styles/bootstrap.min.css";
import "./styles/custom.css";
import HomePage from "./pages/HomePage";


class App extends Component {
    render() {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}

export default App;
