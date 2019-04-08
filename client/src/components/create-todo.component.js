import React, {Component} from 'react';

export default class CreateToDo extends Component {
    constructor(props) {
        super(props);

        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_completed: false
        }
    }


    onChangeToDoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeToDoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log(`ToDo Description: ${this.state.todo_description}`);
        console.log(`ToDo Responsible: ${this.state.todo_responsible}`);
        console.log(`ToDo Completed: ${this.state.todo_completed}`);

        let data = {
            todo_responsible: this.state.todo_responsible,
            todo_description: this.state.todo_description,
            todo_is_done: false
        };
        return fetch('/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(res => res.text()) // OR res.json()
            .then(res => console.log(res))
            .then(
                this.setState({
                    todo_description: '',
                    todo_responsible: '',
                    todo_completed: false
                }))

    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create ToDo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>Description:</label>
                        <input type="text" className="form-control" value={this.state.todo_description}
                               onChange={this.onChangeToDoDescription} required autoFocus/>
                    </div>
                    <div className={"form-group"}>
                        <label>Responsible:</label>
                        <input type="text" className="form-control" value={this.state.todo_responsible}
                               onChange={this.onChangeToDoResponsible} required/>
                    </div>
                    <div className="form-group">
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <input className="form-check-input" type="radio" name="priorityOptions" id="priorityLow"*/}
                        {/*           value="Low" checked={this.state.todo_priority === 'Low'}*/}
                        {/*           onChange={this.onChangeToDoPriority} checked="checked"/>*/}
                        {/*    <label className="form-check-label">Low</label>*/}
                        {/*</div>*/}
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <input className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium"*/}
                        {/*           value="Medium" checked={this.state.todo_priority === 'Medium'}*/}
                        {/*           onChange={this.onChangeToDoPriority}/>*/}
                        {/*    <label className="form-check-label">Medium</label>*/}
                        {/*</div>*/}
                        {/*<div className="form-check form-check-inline">*/}
                        {/*    <input className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh"*/}
                        {/*           value="High" checked={this.state.todo_priority === 'High'}*/}
                        {/*           onChange={this.onChangeToDoPriority}/>*/}
                        {/*    <label className="form-check-label">High</label>*/}
                        {/*</div>*/}
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create ToDo" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}