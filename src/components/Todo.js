import React from "react";

const Todo = ({ text }) => {
    return (
        <div className="todo">
            <input type="checkbox" />
            <li className={`todo-item`}>{text}</li>
            <button className="trash-btn">
                <i className="ri-delete-bin-7-line"></i>
            </button>
        </div>
    );
};

export default Todo;
