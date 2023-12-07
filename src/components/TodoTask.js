import React from "react";

export default function TodoTask({id, task, description, onDelete }) {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className="flex justify-between items-center mt-5 mx-10">
            <details className="collapse bg-base-200">
                <summary className="collapse-title text-xl font-medium">
                    {task}
                </summary>
                <div className="collapse-content">
                    <p>{description}</p>
                </div>
            </details>
            <button className="btn btn-error ml-3" onClick={handleDelete}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
