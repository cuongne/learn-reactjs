import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ToDoList from '../../components/ToDoList';
ListPage.propTypes = {

};

function ListPage(props) {
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
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(()=>{
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });
    useEffect(() =>{
        const params = queryString.parse(location.search);

        setFilterStatus(params.status || 'all');
    },[location.search])
    const handleAllClick = () => {
        const queryParams = { status: 'all'};
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams),
        })
    }
    const handleCompleteClick = () => {
        const queryParams = { status: 'complete'};
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams),
        })
    }
    const handleNewClick = () => {
        const queryParams = { status: 'new'};
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams),
        })
    }
    const renderFilterTodoList = useMemo(() =>{
       return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    },[todoList,filterStatus]) 
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

export default ListPage;