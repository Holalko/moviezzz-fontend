import {RouterStore} from 'mobx-react-router';
import MovieStore from "./data/MovieStore";
import MoviesStore from "./data/MoviesStore";


class MoviezzStore {
    route = new RouterStore();

    movieStore = new MovieStore();
    moviesStore = new MoviesStore();
}

const Store = new MoviezzStore();

export default Store;