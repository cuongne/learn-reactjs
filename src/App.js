
//import './App.css';

import { Link, NavLink, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import ToDoFeature from "./features/ToDo";
function App() {

  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">ToDos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <NavLink activeClassName="active-menu" to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Route exact path="/" component={ToDoFeature} />
        <Route path="/todos" component={ToDoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
