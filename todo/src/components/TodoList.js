import React from 'react';
import {connect} from 'react-redux';

import {toggleItem, deleteItem} from '../actions';

import styled from 'styled-components';

// Styled Components

const TodoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DeleteBtn = styled.button`
    height: 25px;
    background: white;
    border: 1px solid lightblue;
    cursor: pointer;

    &:hover {
        background: lightblue;
        border-color: lightgrey;
        transition: all 200ms ease;
    }
`

// TodoList Constructor

class TodoList extends React.Component {

    deleteItem = (event, id) => {
        event.preventDefault();
        this.props.deleteItem(id);
    }
    
    render() {
        return (
            <div className="to-do-list">
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id}>
                        <p
                        onClick={() => this.props.toggleItem(todo.id)}
                        className={todo.completed ? "completed" : ""}
                        >{todo.value}</p>
                        <DeleteBtn onClick={() => this.props.deleteItem(todo.id)}>Delete</DeleteBtn>
                    </TodoItem>
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

export default connect(mapStateToProps, {toggleItem, deleteItem})(TodoList);