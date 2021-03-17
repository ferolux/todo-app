import React from "react";
import TodoItem from "../TodoItem";

import "./TodoList.css";

const TodoList = (props) => {

    const {todoData, updateStatus} = props;

    const elements = todoData.map(item => {

        if(item.statuses[2].status) {
            return null;
        }

        const {id, ...itemProps} = item;

        return (
            <li className="todo-item" key={id}>
                <TodoItem {...itemProps}/>
                <div className="todo-item__buttons">
                    <button onClick={() => updateStatus(id, 1)} className="todo-item-button todo-item-button--active todo-item-button--ok">OK</button>
                    <button onClick={() => updateStatus(id, 2)} className="todo-item-button todo-item-button--del">DEL</button>
                    <button onClick={() => updateStatus(id, 3)} className="todo-item-button todo-item-button--i">!</button>
                </div>
            </li>
        )
    })

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
}

export default TodoList;
