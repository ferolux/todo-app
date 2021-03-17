import React from "react";

import "./AppHeader.css";

const AppHeader = ({done, todo}) => {
    return (
        <div className="app-header">
            <h1 className="app-header__title">ToDo App</h1>
            <p className="app-header__text"><strong>{todo}</strong> More to do || Done <strong>{done}</strong></p>
        </div>
    )
}

export default AppHeader;