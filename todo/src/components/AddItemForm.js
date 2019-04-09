import React from 'react';
import {connect} from 'react-redux';

class AddItemForm extends React.Component {
    state = {
        newItem: ''
    }

    handleChanges = event => {
        this.setState({
            newItem: event.target.value
        })
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
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, {})(AddItemForm);