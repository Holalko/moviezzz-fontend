import {RouterStore} from 'mobx-react-router';
import MovieStore from "./data/MovieStore";
import MoviesStore from "./data/MoviesStore";
import LoginStore from "./login/LoginStore";


class MoviezzStore {
    route = new RouterStore();

    movieStore = new MovieStore();
    moviesStore = new MoviesStore();
    loginStore = new LoginStore();
}

const Store = new MoviezzStore();

export default Store;