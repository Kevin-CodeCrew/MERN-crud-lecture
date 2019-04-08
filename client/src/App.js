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

                </div>
            </Router>
        );
    }
}

export default App;
