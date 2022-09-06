import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};
// eslint-disable-next-line no-unused-expressions
Todolist.defaultProps = {
    todos: [],
    onTodoClick: null
}

function Todolist(props) {
    const { todos, onTodoClick } = props;
    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ui className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClick(todo)} >{todo.title}</li>
            ))}
        </ui>
    );
}

export default Todolist;