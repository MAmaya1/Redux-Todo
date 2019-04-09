import React from 'react';
import {connect} from 'react-redux';

import {toggleItem} from '../actions';

class TodoList extends React.Component {
    
    render() {
        return (
            <div className="to-do-list">
                {this.props.todos.map(todo => (
                    <p 
                        key={todo.id}
                        onClick={() => this.props.toggleItem(todo.id)}
                        className={todo.completed ? "completed" : ""}
                    >{todo.value}</p>
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

export default connect(mapStateToProps, {toggleItem})(TodoList);