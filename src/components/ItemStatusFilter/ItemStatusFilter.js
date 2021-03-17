import React from "react";
import "./itemStatusFilter.css";

const ItemStatusFilter = () => {
    return (
        <div className="item-status-filter">
            <button className="item-status-filter__button item-status-filter__button--active">All</button>
            <button className="item-status-filter__button ">Active</button>
            <button className="item-status-filter__button ">Done</button>
        </div>
    )
}

export default ItemStatusFilter;