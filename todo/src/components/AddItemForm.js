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
`

const SubmitBtn = styled.button`
    padding: 8px;
    color: white;
    border: 1px solid grey;
    background: white;
    color: black;
    cursor: pointer;

    &:hover {
        background: lightgrey;
        transition: all 200ms ease;
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
                <SubmitBtn onClick={this.addItem}>Submit</SubmitBtn>
            </Form>
        )
    }
}

export default connect(null, {addItem})(AddItemForm);