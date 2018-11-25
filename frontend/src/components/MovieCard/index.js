import React from "react";
import PropTypes from "prop-types";

import Grey from "../../images/grey.png";
import {Link} from "react-router-dom";

class MovieCard extends React.Component {
    static propTypes = {
        movie: PropTypes.object
    };


    render() {
     const movie = this.props.movie;
        return (
            <div className="card m-4" style={{width: '18rem'}}>
                <img className="card-img-top" src={Grey} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <p className="card-text">
                        Year of release: {movie.yearOfRelease}
                    </p>
                    <p>
                        Adults only: {movie.forAdults + ''}
                    </p>
                    <Link to={`/movie/${movie.id}`}><button className="btn btn-primary">Show info</button></Link>
                </div>
            </div>
        )

    }
}

export default MovieCard;