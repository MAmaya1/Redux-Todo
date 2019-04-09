import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions';

import styled from 'styled-components';

// Styled Components

const Form = styled.form`
    background: lightblue;
    padding: 20px;
    text-align: center;
    border-radius: 10px;

    input {
        padding: 8px;
        width: 200px;
        margin-right: 10px;
    }

    button {
        padding: 8px;
        color: white;
        border: 2px solid grey;
        background: white;
        color: black;
    }
`

// Add Item Form Constructor

class AddItemForm extends React.Component {
    state = {
        newItem: ''
    }

    handleChanges = event => {
        this.setState({
            newItem: event.target.value
        })
    }

    addItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newItem: ''});
    }

    render() {
        return (
            <Form>
                <input
                    type="text"
                    value={this.state.newItem}
                    placeholder="Add new item"
                    onChange={this.handleChanges}
                />
                <button onClick={this.addItem}>Submit</button>
            </Form>
        )
    }
}

export default connect(null, {addItem})(AddItemForm);