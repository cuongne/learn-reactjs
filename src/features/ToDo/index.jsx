import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ToDoFeature.propTypes = {

};

function ToDoFeature(props) {
   const match = useRouteMatch() ;
    return (
        <div>
            <Switch>
                <Route exact path={match.path} component={ListPage} />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
            </Switch>
        </div>
    );
}

export default ToDoFeature;