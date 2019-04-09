import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    
    render() {
        return (
            <div className="to-do-list">
                {this.props.todos.map(todo => (
                    <p key={todo.id}>{todo.value}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList);