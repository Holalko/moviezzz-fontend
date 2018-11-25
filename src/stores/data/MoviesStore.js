import {observable, action, computed} from 'mobx';
import axios from 'axios';
import Movie from "../../models/Movie";

class MoviesStore {

    @observable _movies = [];

    @computed get Movies() {return this._movies;}

    @action setMovies(movies) {this._movies = movies;}

    @action addMovie(movie) {this._movies.push(movie);}

    async getAllMovies(){
        const movies = await axios.get("http://localhost:8080/movies");
        this.setMovies(movies.data);
    }
}

export default MoviesStore;