import React from "react";
import "./SearchPanel.css";

const SearchPanel = (props) => {
    const {changeInput} = props;

    const onInputChange = (evt) => {
        const value = evt.target.value;
        const inputName = evt.target.name;
        changeInput(value, inputName);
    }
    return (
        <input
            onChange={onInputChange}
            name="inputSearchValue"
            className="search-input"
            placeholder="search"/>
    )
}

export default SearchPanel;