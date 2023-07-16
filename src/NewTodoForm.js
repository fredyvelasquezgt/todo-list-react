import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {task: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.createTodo(this.state)
        this.setState({task: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label
                        htmlFor="task"
                        >
                        Create task
                    </label>
                    <input
                        name="task"
                        type="text"
                        id="task"
                        placeholder="New Todo"
                        value={this.state.task}
                        onChange={this.handleChange} />
                    <button>Create todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;