import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <h1>Todo List</h1>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
            />
        </div>
    );
}

export default App;
