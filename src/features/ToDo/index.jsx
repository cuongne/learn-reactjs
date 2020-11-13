import React, { useState } from 'react';
import ToDoList from './components/ToDoList';

ToDoFeature.propTypes = {

};

function ToDoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Code',
            status: 'new',
        },
        {
            id: 2,
            title: 'Eat',
            status: 'complete'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'
        },
    ]

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        console.log(todo, idx);
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'complete' : 'new'
        };
        setTodoList(newTodoList);
    }

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');
    const handleAllClick = () => {
        setFilterStatus('all')
    }
    const handleCompleteClick = () => {
        setFilterStatus('complete')
    }
    const handleNewClick = () => {
        setFilterStatus('new')
    }
    const renderFilterTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div>
            <h3>To do List</h3>
            <ToDoList todoList={renderFilterTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleAllClick}>All</button>
                <button onClick={handleCompleteClick}>Complete</button>
                <button onClick={handleNewClick}>New</button>
            </div>
        </div>
    );
}

export default ToDoFeature;