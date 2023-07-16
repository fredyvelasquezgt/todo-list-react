import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
    }

    render(){
        return (
            <NewTodoForm />
        )
    }
}

export default TodoList;