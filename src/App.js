import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TodoTask from "./components/TodoTask";
import "./App.css";
import EmptyContainer from "./components/EmptyContainer";
import Footer from "./components/Footer";

function App() {
    const [todo, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo((prev) => [...prev, todo]);
    };

    const removeTodo = (todoId) => {
        const newTodo = todo.filter((todo) => todo.id !== todoId);
        setTodo(newTodo);
    };

    return (
        <>
            <NavBar onClickAddTodo={addTodo} />

            {todo.length === 0 ? (
                <EmptyContainer />
            ) : (
                todo.map((todo) => (
                    <TodoTask
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        description={todo.description}
                        onDelete={removeTodo}
                    />
                ))
            )}
            <Footer />
        </>
    );
}

export default App;
