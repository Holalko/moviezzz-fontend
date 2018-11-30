import React from "react";
import PageWrapper from "../PageWrapper";
import {observer,inject} from "mobx-react"

    @inject("moviesStore")
@observer
class FollowedAndReservedPage extends React.Component {

    componentWillMount() {
        this.props.moviesStore.getFollowed();
        this.props.moviesStore.getReserved();
    }

    render() {
        const followed = this.props.moviesStore._followed;
        const reserved = this.props.moviesStore._reserved;
        return (
            <PageWrapper>
                <h2>Followed</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Year of release</th>
                        <th scope="col">For adults</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       Array.isArray(followed) ?
                            followed.map((movie) => {
                                return (
                                    <tr key={movie.id}>
                                        <td scope="row">{movie.name}</td>
                                        <td>{movie.yearOfRelease}</td>
                                        <td>{movie.forAdults + ''}</td>
                                    </tr>
                                )
                            }) : null
                    }
                    </tbody>
                </table>
                <h2>Reserved</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Year of release</th>
                        <th scope="col">For adults</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Array.isArray(reserved) ?
                            reserved.map((movie) => {
                                return (
                                    <tr key={movie.id}>
                                        <td scope="row">{movie.name}</td>
                                        <td>{movie.yearOfRelease}</td>
                                        <td>{movie.forAdults + ''}</td>
                                    </tr>
                                )
                            }) : null
                    }
                    </tbody>
                </table>
            </PageWrapper>
        )
    }

}

export default FollowedAndReservedPage;