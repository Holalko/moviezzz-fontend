import {observable, computed, action} from "mobx";
import axios from "axios";

class LoginStore {

    async checkLogin(email, password) {
            const response = await axios.post("http://localhost:8080/login", {email: email, password: password});
            console.log(response);
            return response.data;
    }


}

export default LoginStore;