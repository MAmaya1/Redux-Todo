import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions';

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
            <form className="add-new-item">
                <input
                    type="text"
                    value={this.state.newItem}
                    placeholder="Add new item"
                    onChange={this.handleChanges}
                />
                <button onClick={this.addItem}>Submit</button>
            </form>
        )
    }
}

export default connect(null, {addItem})(AddItemForm);