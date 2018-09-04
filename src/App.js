import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import StateExample from './StateExample.js';
import Signup from './Signup.js';

class App extends Component {
    constructor() {
        super()
        this.state = { name: "" }
        this.nameChange = this.nameChange.bind(this)
    }
    nameChange(name) {
        console.log('the name change event is set up correctly')
        this.setState({name: name})
    }
    render() {
        
    return (
      <div className="App">
            {/*
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          */}  
                <div className="AppMyDiv">
                {/*
                    <p>
                        Adding a paragraph element to the page
                    </p>
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                        <li>List item 4</li>
                    </ul>
                <StateExample />
                */} 
                <div id="navbar">
                    Welcome to our Site {this.state.name}
                    <hr/>
                </div>
                <div>
                    <Signup onSubmitSignup={this.nameChange} />
                </div>
                </div> 
            
        </div>
        
    );
  }
}

export default App;
