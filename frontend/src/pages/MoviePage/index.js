import React from "react";
import {inject, observer} from "mobx-react";
import PageWrapper from "../PageWrapper";
import Movie from "../../models/Movie";
import Grey from "../../images/grey.png";
import * as ReactDOM from "react-dom";

@inject("movieStore")
@observer
class MoviePage extends React.Component {


    componentWillMount() {
        const id = parseInt(this.props.match.params.value, 10);
        this.props.movieStore.fetchMovie(id);
    }

    handleReserve = async () => {
        const response = await this.props.movieStore.reserve();
        if (response === false) {
            alert("Movie could not be reserved, because it's reserved or borrowed by another customers.");
        } else if(response === true) {
            alert("Movie was successfully reserved!");
        }
    };

    render() {
        const movie = this.props.movieStore.Movie;
        return (
            <PageWrapper>
                {movie === null ? <p>none</p> :
                    <div className="card p-4">
                        <img src={Grey} style={{width: '256px', height: '256px'}}/>
                        <h1>{movie.name}</h1>
                        <p>{movie.description}</p>
                        <p>Price: {movie.price}$</p>
                        <p>Adults only: {movie.forAdults + ''}</p>
                        <button onClick={this.handleReserve} className="btn btn-primary col-1">Reserve</button>
                    </div>
                }
            </PageWrapper>
        )
    }

}

export default MoviePage;

