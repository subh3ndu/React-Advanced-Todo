import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import EditTodoForm from './components/EditTodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = React.useState(
        JSON.parse(localStorage.getItem('todos')) || []
    );
    const [todo, setTodo] = React.useState('');
    const [isEditing, setIsEditing] = React.useState(false);
    const [currentTodo, setCurrentTodo] = React.useState({});

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleInputChange(e) {
        setTodo(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        let present = false;
        todos.forEach((elem) => {
            if (elem.text === todo) present = true;
        });

        if (todo !== '' && !present) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.trim(),
                },
            ]);
        }
        setTodo('');
    }

    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => todo.id !== id);

        setTodos(removeItem);
    }

    function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }

    function handleEditInputChange(e) {
        setCurrentTodo({
            ...currentTodo,
            text: e.target.value,
        });
        console.log(currentTodo);
    }

    function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();

        handleUpdateTodo(currentTodo.id, currentTodo);
    }

    return (
        <div className="App">
            {isEditing ? (
                <EditTodoForm
                    currentTodo={currentTodo}
                    setIsEditing={setIsEditing}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleEditInputChange={handleEditInputChange}
                />
            ) : (
                <AddTodoForm
                    todo={todo}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
            )}

            <TodoItem
                todos={todos}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
            />
        </div>
    );
}

export default App;
