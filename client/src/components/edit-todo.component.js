import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export default class EditToDo extends Component {

    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_completed: false
        }
        this.loadData();
    }


    loadData() {
        fetch('/todo/'+this.props.match.params.id)
            .then(data => data.json())
            .then(response => {
                this.setState({
                    todo_description: response.todo_description,
                    todo_responsible: response.todo_responsible,
                    todo_completed: response.todo_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            // .finally(
            //     console.log(`todo_description:${this.state.todo_description}
            //     todo_responsible:${this.state.todo_responsible}
            //     todo_completed:${this.state.todo_completed}`)
            // )
            // .then(data => data.json())
            // .then(returnedData => this.setState({todos:returnedData}))

    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        console.log(`ISDONE =${e.target.checked}`);
        this.setState({
            todo_completed: e.target.checked
        });
    }

    // FIXME: this will break
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const data = {

            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_completed: this.state.todo_completed,
            toHomePage: false,
        };
        console.log(data);

        return fetch('/todo/'+this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(res => res.text()) // OR res.json()
            .then(res => console.log(res))
            .then(()=>{this.setState({toHomePage: true})});
    }

    render() {
        if (this.state.toHomePage === true){
            return <Redirect to={'/'}/>
        }
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-check">
                        {/*<input  className="form-check-input"*/}
                        {/*        id="completedCheckbox"*/}
                        {/*        type="checkbox"*/}
                        {/*        name="completedCheckbox"*/}
                        {/*        onChange={this.onChangeTodoCompleted}*/}
                        {/*        checked={this.state.todo_completed}*/}
                        {/*        // value={this.state.todo_completed}*/}
                        {/*/>*/}

                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.todo_completed}
                                onChange={this.onChangeTodoCompleted} />
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}