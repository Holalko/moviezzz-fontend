import React from "react";
import Navbar from "../../components/Navbar";
import PageWrapper from "../PageWrapper";
import {observer, inject} from 'mobx-react';
import MovieCard from "../../components/MovieCard";

@inject("moviesStore")
@observer
class HomePage extends React.Component {

    componentWillMount() {
        this.props.moviesStore.getAllMovies();
    }

    render() {
        const movies = this.props.moviesStore.Movies;
        return (
            <PageWrapper>
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
