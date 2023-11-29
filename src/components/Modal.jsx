import React from "react";

export default function Modal() {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                }
            >
                +
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Enter a task!</h3>
                    <input
                        type="text"
                        placeholder="task"
                        className="input input-bordered w-full max-w-xs mt-5"
                    />
                    <br />
                    <textarea
                        className="textarea textarea-primary w-full max-w-xs mt-3"
                        placeholder="description"
                    ></textarea>
                    <br />
                    <button className="btn btn-active btn-neutral mt-3">
                        Add
                    </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
