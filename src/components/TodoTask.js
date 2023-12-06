import React from "react";

export default function TodoTask({taskName,taskDescription,onDelete}) {
    return (
        <div className="flex justify-between items-center mt-5 mx-10">
            <details className="collapse bg-base-200">
                <summary className="collapse-title text-xl font-medium">
                    {taskName}
                </summary>
                <div className="collapse-content">
                    <p>{taskDescription}</p>
                </div>
            </details>
            <button className="btn btn-error ml-3" onClick={onDelete}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
