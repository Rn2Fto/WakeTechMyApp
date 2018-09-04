import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {

    logTheEventOnUserClick(e) {
        console.log('event', e);
    }

    render() {
        return (
            <div className="Login">
                <p>Hello this is my name</p>
                <button onClick={this.logTheEventOnUserClick}>Click ME!</button>

            </div>
            );
    }
}
export default Login;

