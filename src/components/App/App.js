import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddTodoItem from "../AddTodoItem";

import "./App.css";

const App = () => {

    const todoData = [
        { id: 1, label: "Build React App", important: false },
        { id: 2, label: "Drink coffee", important: false },
        { id: 3, label: "Build next React App", important: false },

    ]

    return (
        <div className="app">
            <AppHeader todo={1} done={3}/>
            <div className="app__top-panel">
                <div className="top-panel">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
            </div>
            <TodoList todoData={todoData}/>
            <AddTodoItem/>
        </div>
    )
}

export default App;