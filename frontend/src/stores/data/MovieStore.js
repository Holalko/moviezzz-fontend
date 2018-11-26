import {observable, action, computed} from 'mobx';
import axios from 'axios';

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

        const response = await axios.post(`http://localhost:8080/movies/reserve?movieId=${movieId}&userId=${userId}`)
        console.log(response);
    }
}

export default MovieStore;