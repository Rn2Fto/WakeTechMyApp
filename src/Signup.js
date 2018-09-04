import React, { Component } from 'react';
import './App.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitSignup(this.state.name);
    }
    render() {
        return (
            <form>
                <div id="input">
                <label>Name: </label>
                <input type="text" onChange={this.handleNameChange}/>
                <br/>
                <label>Email Address: </label>
                <input type="email" onChange={this.handleEmailChange}/>
                <br />
                <label>Password: </label>
                <input type="password" onChange={this.handlePasswordChange} />
                    <br />
                <button onClick={this.handleSubmit}>Submit</button>
                </div>

            </form>

        );
    }
}

export default Signup;
