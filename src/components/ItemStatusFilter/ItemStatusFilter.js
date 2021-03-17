import React from "react";
import "./itemStatusFilter.css";

const ItemStatusFilter = ({changeTodoFilter, filterId}) => {
    const onTodoFilterClick = (filterId) => {
        changeTodoFilter(filterId);
    }

    const filterArr = [
        {filterId: 1, filterText: "All"},
        {filterId: 2, filterText: "Active"},
        {filterId: 3, filterText: "Done"}
        ];

    const buttons = filterArr.map(el => {
        let buttonClassName = "item-status-filter__button";
        if(el.filterId === filterId) {
            buttonClassName += " item-status-filter__button--active"
        }
        return (
            <button key={el.filterId} onClick={() => onTodoFilterClick(el.filterId)}
                className={buttonClassName}>{el.filterText}</button>
        )
    })


    return (
        <div className="item-status-filter">
            {buttons}
        </div>
    )
}

export default ItemStatusFilter;