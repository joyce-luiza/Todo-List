import React from "react";
import { v4 as uuid } from "uuid";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const uniqueID = uuid();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: uniqueID },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <div>
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                />
                <button
                    onClick={submitTodoHandler}
                    type="submit"
                    className="todo-button"
                >
                    <i class="ri-add-line"></i>
                </button>
            </div>
            <div className="select">
                <select
                    name="todos"
                    className="filter-todo"
                    onChange={statusHandler}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
