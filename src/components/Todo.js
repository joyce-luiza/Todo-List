import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    // Delete todo
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    return (
        <div className="todo">
            <input type="checkbox" />
            <li className={`todo-item`}>{text}</li>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="ri-delete-bin-7-line"></i>
            </button>
        </div>
    );
};

export default Todo;
