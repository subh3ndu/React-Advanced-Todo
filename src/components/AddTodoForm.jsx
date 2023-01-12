import React from 'react';

function AddTodoForm({ todo, handleFormSubmit, handleInputChange }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Add Todo</h2>
            <label htmlFor="todo">Add Todo: </label>
            <input
                name="todo"
                type="text"
                placeholder="Create a new todo..."
                value={todo}
                onChange={handleInputChange}
            />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
