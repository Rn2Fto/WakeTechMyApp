// JavaScript source code
import React, { Component } from 'react';
import { ReactPropTypes } from 'react';

class StateExample extends React.Component {

    constructor(props) {
        super(props)
        this.state = { amount: 0 }
        
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }
    //typical to see event functions as handle
    handleAddButtonClick() {
        this.setState({ amount: this.state.amount + 1 })
    }
    render() {
        return (
            < div >
                <button id="Add" onClick={this.handleAddButtonClick}>Add One</button>
                <h3>We have {this.state.amount} Items</h3>

            </div>
        );
    }
}
export default StateExample;

