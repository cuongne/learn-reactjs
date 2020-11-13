import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';
ToDoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
ToDoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};
function ToDoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick)
            return;
        onTodoClick(todo, idx);
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        complete: todo.status === 'complete'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default ToDoList;