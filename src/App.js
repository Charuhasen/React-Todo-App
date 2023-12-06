import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TodoTask from "./components/TodoTask";
import "./App.css";
import EmptyContainer from "./components/EmptyContainer";

function App() {
    const [todo, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo((prev) => [...prev, todo]);
    };

    return (
        <>
            <header>
                <NavBar onClickAddTodo={addTodo} />
            </header>
            <body>
                {todo.length > 0 ? (
                    todo.map((todo) => (
                        <TodoTask
                            taskName={todo.todo}
                            taskDescription={todo.description}
                        />
                    ))
                ) : (
                    <EmptyContainer />
                )}
            </body>
        </>
    );
}

export default App;
