import React from 'react';

function EditTodoForm({
    currentTodo,
    setIsEditing,
    handleEditFormSubmit,
    handleEditInputChange,
}) {
    return (
        <form onSubmit={handleEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <input
                name="editTodo"
                type="text"
                placeholder="Edit todo"
                value={currentTodo.text}
                onChange={handleEditInputChange}
            />
            <button>Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
}

export default EditTodoForm;
