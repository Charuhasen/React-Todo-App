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
                todo: formState.task,
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
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                </div>
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
