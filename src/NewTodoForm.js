import React, { Component } from 'react';

class NewTodoForm extends Component {


    render() {
        return (
            <div>
                <form>
                    <label
                        htmlFor="todo"
                        >
                        Create task
                    </label>
                    <input
                        name="todo"
                        type="text"
                        id="todo" />
                    <button>Create todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;