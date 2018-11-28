import React from "react";
import {inject, observer} from "mobx-react";
import {Link, Redirect} from "react-router-dom";

@inject("loginStore")
@observer
class LoginPage extends React.Component {

    state = {
        email: '',
        password: ''
    };

    changeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    changePassword = (event) => {
        this.setState({password: event.target.value});
    };

    handleLogin = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const response = await this.props.loginStore.checkLogin(email, password);
        if (Number.isInteger(response)) {
            localStorage.setItem("userId", response);
            this.props.history.push("/home");
        } else {
            alert("Invalid username or password");
        }
    };

    render() {
        const {email, password} = this.state;
        if(localStorage.getItem("userId") !== null){
            return <Redirect to="/home" />
        }
        return (
            <div className="text-center pt-5">
                <form style={{
                    width: '100%',
                    maxWidth: '330px',
                    padding: '15px',
                    margin: 'auto'
                }}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control mb-1" placeholder="Email address"
                           required={true}
                           onChange={this.changeEmail}
                           value={email}
                           autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control mb-1" placeholder="Password"
                           required={true} onChange={this.changePassword} value={password}/>
                    <button onClick={this.handleLogin} className="btn btn-lg btn-primary btn-block" type="submit">Sign
                        in
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2018</p>
                </form>
            </div>
        )
    }

}

export default LoginPage;