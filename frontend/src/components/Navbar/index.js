import React from 'react';
import {inject, observer} from 'mobx-react'
import Link from "react-router-dom/es/Link";
import {Redirect} from "react-router-dom";

@inject("movieStore", "loginStore")
@observer
class Navbar extends React.Component {

    state = {
        isLogout: false
    };

    handleClick = (event) => {
        event.preventDefault();
        localStorage.clear();
        this.setState({isLogout: true})
    };

    redirectToLogin() {
        if (this.state.isLogout) {
            return (
                <Redirect to="/"/>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                {this.redirectToLogin()}
                <Link to={"/"}><span className="navbar-brand">Moviezzz</span></Link>
                {localStorage.getItem("userId") == 77777 ?
                    <Link to={"/addMovie"}><span className="nav-link">Add new movie</span></Link> :
                    <React.Fragment>
                        <Link to={"/borrowed"}><span className="nav-link">Borrowed movies</span></Link>
                        <Link to={"/followedAndReserved"}><span className="nav-link">Reserved/followed movies</span></Link>
                    </React.Fragment>
                }
                <button className="btn btn-outline-primary float-right" onClick={this.handleClick}>Logout</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02"
                        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }


}

export default Navbar;