import React from "react";
import PageWrapper from "../PageWrapper";
import {inject, observer} from "mobx-react";

@inject("movieStore")
@observer
class AddMoviePage extends React.Component {

    state = {
        name: '',
        price: 0,
        description: '',
        forAdults: false,
        yearOfRelease: 0,
        showRewrite: false
    };

    handleCreate = async () => {
        const {name, price, description, forAdults, yearOfRelease} = this.state;
        if (name.length === 0 &&
            price.length === 0 ||
            description.length === 0 ||
            yearOfRelease.length === 0
        ) {
            alert("Fill all fields");
            return;
        }
        const movie = {
            name: name,
            price: price,
            description: description,
            forAdults: forAdults,
            yearOfRelease: yearOfRelease,
        };
        const resp = await this.props.movieStore.createMovie(movie);
        if (resp !== -1) {
            alert("Movie successfully created!")
        } else {
            alert("Movie already exists, if you want to rewrite movie with current values, press Rewrite button");
            this.setState({showRewrite: true});
        }
    };

    handleRewrite = async () => {
        const {name, price, description, forAdults, yearOfRelease} = this.state;
        if (name.length === 0 ||
            price.length === 0 ||
            description.length === 0 ||
            yearOfRelease.length === 0
        ) {
            alert("Fill all fields");
            return;
        }
        const movie = {
            name: name,
            price: price,
            description: description,
            forAdults: forAdults,
            yearOfRelease: yearOfRelease,
        };

        const resp = await this.props.movieStore.rewrite(movie);
        if (Number.isInteger(resp)) {
            alert("Successfully created!");
        } else {
            alert("Oooops! There was a problem while rewriting values!");
        }
    };

    nameChange = (event) => {
        this.setState({name: event.target.value});
    };

    descriptionChange = (event) => {
        this.setState({description: event.target.value});
    };

    yearOfReleaseChange = (event) => {
        this.setState({yearOfRelease: event.target.value});
    };

    priceChange = (event) => {
        this.setState({price: event.target.value});
    };

    forAdultsChange = () => {
        this.setState({forAdults: !this.state.forAdults});
    };

    render() {
        const {name, price, description, forAdults, yearOfRelease} = this.state;
        return (
            <PageWrapper>
                <div className="card p-4 ">
                    <div className={"form-group"}><label>Name</label>
                        <input required={true} className="form-control" type="text"
                               value={name}
                               onChange={this.nameChange}/></div>
                    <div className={"form-group"}><label>Description</label>
                        <input required={true} className="form-control" type="text"
                               value={description}
                               onChange={this.descriptionChange}/>
                    </div>
                    <div className={"form-group"}><label>Price</label>
                        <input required={true} className="form-control" type="number"
                               value={price}
                               onChange={this.priceChange}/></div>
                    <div className={"form-group"}><label className="form-check-label">Adults only</label>
                        <div className="form-check">
                            <input required={true} className="form-check-input"
                                   type="checkbox" value={forAdults}
                                   onChange={this.forAdultsChange}/>
                        </div>
                    </div>
                    <div className={"form-group"}><label>Year of release</label>
                        <input required={true} className="form-control"
                               type="number"
                               value={yearOfRelease}
                               onChange={this.yearOfReleaseChange}/>
                    </div>
                    <button onClick={this.handleCreate} className="btn btn-primary col-1">Create</button>
                    {this.state.showRewrite ?
                        <button onClick={this.handleRewrite}
                                className="btn btn-primary mt-3 col-1">Rewrite</button> : null}
                </div>
            </PageWrapper>
        )
    }
}

export default AddMoviePage;
