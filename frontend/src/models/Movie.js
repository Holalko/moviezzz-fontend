import {observable, computed} from 'mobx';

class Movie {

    @observable id;
    @observable name;
    @observable description;
    @observable yearOfRelease;
    @observable forAdults;
    @observable price;

    constructor(src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.yearOfRelease = src.yearOfRelease;
        this.forAdults = src.forAdults;
        this.price = src.price;
    }

    @computed
    get Id() {
        return this.id;
    }

    @computed
    get Name() {
        return this.name;
    }

    @computed
    get Description() {
        return this.description;
    }

    @computed
    get YearOfRelease() {
        return this.yearOfRelease;
    }

    @computed
    get Prize() {
        return this.price;
    }

    @computed
    get ForAdults() {
        return this.forAdults;
    }
}

export default Movie;