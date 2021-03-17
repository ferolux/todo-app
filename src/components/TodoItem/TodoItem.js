import React from "react";

const TodoItem = (props) => {

    const { label, statuses } = props;

    let className = "todo-item__text";


    if(statuses[1].status) {
        className += " todo-item__text--ok";
    }

    if(statuses[3].status) {
        className += " todo-item__text--i"
    }

    return (
        <span className={className}>{label}</span>
    )

}

export default TodoItem;