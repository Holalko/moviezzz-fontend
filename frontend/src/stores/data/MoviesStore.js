import {observable, action, computed} from 'mobx';
import axios from 'axios';

class MoviesStore {

    @observable _movies = [];

    @computed get Movies() {return this._movies;}

    @action setMovies(movies) {this._movies = movies;}

    @action addMovie(movie) {this._movies.push(movie);}

    async getAllBorrowedMovies(customerId){
        const movies = await axios.get("http://localhost:8080/movies/user/" + customerId);
        this.setMovies(movies.data);
    }

    async getAllMovies(){
        const movies = await axios.get("http://localhost:8080/movies");
        this.setMovies(movies.data);
    }

    async findByName(name){
        const movies = await axios.get(`http://localhost:8080/movies/find-by-name?name=${name}`);
        this.setMovies(movies.data);
    }
}

export default MoviesStore;