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
            <div class="todo-content">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        onClick={completeHandler}
                        checked={todo.completed}
                    />
                </label>
                <li
                    className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                    {text}
                </li>
            </div>
            <button className="trash-btn" onClick={deleteHandler}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"
                        fill="rgba(62,127,255,1)"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Todo;
