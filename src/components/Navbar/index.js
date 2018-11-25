import React from 'react';
import {inject, observer} from 'mobx-react'
import Link from "react-router-dom/es/Link";

@inject("movieStore")
@observer
class Navbar extends React.Component{

    handleClick = () =>{
    };

    render(){
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"}><p className="navbar-brand">Moviezzz</p></Link>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </form>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02"
                        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mx-3" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Category <span className="sr-only">(current)</span></a>
                        </li>
                        <form className="form-inline mx-3 my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Prize"/>
                        </form>
                        <button onClick={this.handleClick} className="btn btn-primary">Search</button>
                    </ul>
                </div>
            </nav>
        )
    }


}

export default Navbar;