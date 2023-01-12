import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

function TodoItem({ todos, handleDeleteClick, handleEditClick }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <MdEdit onClick={() => handleEditClick(todo)} />
                    <MdDeleteForever
                        onClick={() => handleDeleteClick(todo.id)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default TodoItem;
