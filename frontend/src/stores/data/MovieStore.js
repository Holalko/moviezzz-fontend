import {observable, action, computed} from 'mobx';
import axios from 'axios';
import Store from "../index";

class MovieStore {
    
    @observable _movie = null;

    @computed get Movie() {return this._movie;}

    @action setMovie(movie) {
        this._movie = movie;}

    async fetchMovie(id){
        const movie = await axios.get(`http://localhost:8080/movies/${id}`);
        this.setMovie(movie.data);
    }

    async reserve(){
        const userId = localStorage.getItem("userId");
        const movieId = this._movie.id;

        const response = await axios.post(`http://localhost:8080/movies/reserve?movieId=${movieId}&userId=${userId}`);
        return response.data;
    }

    async extendReservation(id){
        const response = await axios.put(`http://localhost:8080/movies/extend-reservation/${id}`);
        if(response.data === true){
            Store.moviesStore.getAllBorrowedMovies(localStorage.getItem("userId"));
            alert("Movie reservation was successfully extended!")
        } else {
            alert("Movie reservation could not be extended, because it's followed by another customers.")
        }
        return response.data;
    }

    async createMovie(movie){
        const response = await axios.post(`http://localhost:8080/movies`, movie);
        return response.data;
    }

    async rewrite(movie){
        const response = await axios.put(`http://localhost:8080/movies/rewrite`, movie);
        return response.data;
    }

}

export default MovieStore;