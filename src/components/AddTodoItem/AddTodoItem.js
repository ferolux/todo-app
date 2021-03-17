import React from "react";

import "./AddTodoItem.css";

const AddTodoItem = () => {
    return (
        <div className="add-todo-item">
            <input className="add-todo-item__input" placeholder="add item"/>
            <button className="add-todo-item__button">Add</button>
        </div>
    )
}

export default AddTodoItem;