import React from "react";
import PageWrapper from "../PageWrapper";
import {inject, observer} from "mobx-react";

@inject("moviesStore", "movieStore")
@observer
class BorrowedPage extends React.Component {


    componentWillMount() {
        this.props.moviesStore.getAllBorrowedMovies(localStorage.getItem("userId"));
    }

    handleClick = (id, event) => {
      event.preventDefault();
      this.props.movieStore.extendReservation(id);
    };

    render() {
        const movies = this.props.moviesStore.Movies;
        return (
            <PageWrapper>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Year of release</th>
                        <th scope="col">Due date</th>
                        <th scope="col">For adults</th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map((movie) => {
                            return (
                                <tr key={movie[0]}>
                                    <td scope="row">{movie[1]}</td>
                                    <td>{movie[2]}</td>
                                    <td>{movie[4]}</td>
                                    <td>{movie[3] + ''}</td>
                                    <td><button className="btn btn-success" onClick={(event) => this.handleClick(movie[0], event)}>Extends reservation</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </PageWrapper>
        )
    }

}

export default BorrowedPage;