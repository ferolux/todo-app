import React from "react";

import "./AddTodoItem.css";

const AddTodoItem = (props) => {

    const {inputAddValue, changeInput, addTodoItem} = props;

    const onChangeInput = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        changeInput(value, inputName);
    }

    const onTodoItemAdd = () => {
        addTodoItem();
    }

    return (
        <div className="add-todo-item">
            <input
                className="add-todo-item__input"
                placeholder="add item"
                onChange={onChangeInput}
                value={inputAddValue}
                name="inputAddValue"
            />
            <button onClick={onTodoItemAdd} className="add-todo-item__button">Add</button>
        </div>
    )
}

export default AddTodoItem;