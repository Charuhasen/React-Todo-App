import React, { useState } from "react";

export default function NavBar({ onClickAddTodo }) {
    const [formState, setFormState] = useState({
        task: "",
        description: "",
    });

    const handleInput = ({ target }) => {
        const { name, value } = target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const clearInput = () => {
        setFormState(() => ({
            task: "",
            description: "",
        }));
    };

    const addTodo = () => {
        const modal = document.getElementById("my_modal_2");
        if (formState.task != "") {
            const todo = {
                id: Math.random(),
                task: formState.task,
                description: formState.description,
            };
            onClickAddTodo(todo);
        }
        clearInput();
        modal.close();
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Todo App</a>
            </div>
            <div className="navbar-end">
                <button
                    className="btn"
                    onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                    }
                >
                    +
                </button>
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box text-center">
                        <h3 className="font-bold text-lg">Enter a task!</h3>
                        <input
                            name="task"
                            type="text"
                            placeholder="task"
                            className="input input-bordered w-full max-w-xs mt-5"
                            onChange={handleInput}
                            value={formState.task}
                            required
                        />
                        <br />
                        <textarea
                            name="description"
                            className="textarea textarea-primary w-full max-w-xs mt-3"
                            placeholder="description"
                            onChange={handleInput}
                            value={formState.description}
                        ></textarea>
                        <br />
                        <button
                            className="btn btn-active btn-neutral mt-3"
                            onClick={addTodo}
                        >
                            Add
                        </button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}
