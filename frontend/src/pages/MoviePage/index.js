import React from "react";
import {inject, observer} from "mobx-react";
import PageWrapper from "../PageWrapper";
import Movie from "../../models/Movie";
import Grey from "../../images/grey.png";

@inject("movieStore")
@observer
class MoviePage extends React.Component {


    componentWillMount() {
        const id = parseInt(this.props.match.params.value, 10);
        this.props.movieStore.fetchMovie(id);
    }

    render() {
        const movie = this.props.movieStore.Movie;
        return (
            <PageWrapper>
                {movie === null ? <p>none</p> :
                    <div className="card p-4">
                        <img src={Grey} style={{width:'256px', height:'256px'}}/>
                        <h1>{movie.name}</h1>
                        <p>{movie.description}</p>
                        <p>Price: {movie.price}$</p>
                        <p>Adults only: {movie.forAdults + ''}</p>
                        <button className="btn btn-primary col-1">Reserve</button>
                    </div>
                }
            </PageWrapper>
        )
    }

}

export default MoviePage;

