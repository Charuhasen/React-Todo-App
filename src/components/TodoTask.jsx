import React from "react";

export default function TodoTask(props) {
    return (
        <div className="flex justify-between items-center mt-5 mx-10">
            <details className="collapse bg-base-200">
                <summary className="collapse-title text-xl font-medium">
                    {props.taskName}
                </summary>
                <div className="collapse-content">
                    <p>{props.taskDescription}</p>
                </div>
            </details>
            <button className="btn btn-error ml-3">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
