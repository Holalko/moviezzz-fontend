import React from "react";
import Navbar from "../../components/Navbar";
import PageWrapper from "../PageWrapper";
import {observer, inject} from 'mobx-react';
import MovieCard from "../../components/MovieCard";

@inject("moviesStore")
@observer
class HomePage extends React.Component {

    state = {
        name: ''
    };

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSearch = (event) => {
        this.props.moviesStore.findByName(this.state.name);
        event.preventDefault();
    };

    componentWillMount() {
        this.props.moviesStore.getAllMovies();
    }

    render() {
        const movies = this.props.moviesStore.Movies;
        const {name} = this.state;
        return (
            <PageWrapper>
                <div>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" value={name} onChange={this.handleChange}
                               placeholder="Name"/>
                        <button className="form-control ml-2 btn btn-primary" onClick={this.handleSearch}>Search
                        </button>
                    </form>
                </div>
                <div className="row">
                    {
                        movies.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie}/>
                        })
                    }
                </div>
            </PageWrapper>
        )
    }

}

export default HomePage;
