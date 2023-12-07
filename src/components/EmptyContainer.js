import React from "react";

export default function EmptyContainer() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Its empty in here!</h2>
                    <p>
                        Click on the button in the top right to add a new item.
                    </p>
                </div>
            </div>
        </div>
    );
}
