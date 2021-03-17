import React from "react";
import "./itemStatusFilter.css";

const ItemStatusFilter = ({changeTodoFilter}) => {
    const onTodoFilterClick = (filterId) => {
        changeTodoFilter(filterId);
    }
    return (
        <div className="item-status-filter">
            <button onClick={() => onTodoFilterClick(1)} className="item-status-filter__button item-status-filter__button--active">All</button>
            <button onClick={() => onTodoFilterClick(2)} className="item-status-filter__button ">Active</button>
            <button onClick={() => onTodoFilterClick(3)} className="item-status-filter__button ">Done</button>
        </div>
    )
}

export default ItemStatusFilter;