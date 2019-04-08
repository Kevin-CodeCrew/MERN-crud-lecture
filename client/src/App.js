import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateToDo from "./components/create-todo.component";
import EditToDo from "./components/edit-todo.component";
import ToDosList from "./components/todos-list.component";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    render() {
        return (
            <Router>
                <div className = "container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        {/*<a className="navbar-brand">VooDoo ToDos</a>*/}
                        <Link to="/" className="navbar-brand">VooDoo ToDos</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">ToDos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">New ToDo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={ToDosList}/>
                    <Route path="/create" component={CreateToDo}/>
                </div>
            </Router>
        );
    }
}

export default App;
