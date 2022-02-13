import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    // Delete todo
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="todo">
            <input
                type="checkbox"
                onClick={completeHandler}
                checked={todo.completed}
            />
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="ri-delete-bin-7-line"></i>
            </button>
        </div>
    );
};

export default Todo;
