import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddTodoItem from "../AddTodoItem";

import "./App.css";

class App extends React.Component {

    state = {
        addInput: "",
        todoData: [
            {
                id: 1,
                label: "Сварить кашу",
                statuses: {
                    "1": {statusName: "ok", status: false},
                    "2": {statusName: "del", status: false},
                    "3": {statusName: "important", status: false}
                }
            },
            {
                id: 2,
                label: "Создать React прилжение",
                statuses: {
                    "1": {statusName: "ok", status: false},
                    "2": {statusName: "del", status: false},
                    "3": {statusName: "important", status: false}
                }
            },
            {
                id: 3,
                label: "Съесть кашу",
                statuses: {
                    "1": {statusName: "ok", status: false},
                    "2": {statusName: "del", status: false},
                    "3": {statusName: "important", status: false}
                }
            },

        ]
    }

    updateStatus = (itemId, statusId) => {
        this.setState((state) => {
            return {
                ...state,
                todoData: state.todoData.map(item => {
                    if(item.id === itemId) {
                        return {
                            ...item,
                            statuses: {
                                ...item.statuses,
                                [statusId]: {
                                    ...item.statuses[statusId],
                                    status: !item.statuses[statusId].status
                                }
                            }
                        }
                    }
                    return item;
                })
            }
        });
    }

    updateTodoCount = () => {
        let count = 0;
        this.state.todoData.forEach(el => {
            if(!el.statuses["2"].status) {
                count += 1;
            }
        })
        return count;
    };
    updateDoneCount = () => {
        let count = 0;
        this.state.todoData.forEach(el => {
            if(el.statuses["1"].status && !el.statuses["2"].status) {
                count += 1;
            }
        })
        return count;
    };


    render() {

        const todoCount = this.updateTodoCount();
        const doneCount = this.updateDoneCount();

        return (
            <div className="app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="app__top-panel">
                    <div className="top-panel">
                        <SearchPanel/>
                        <ItemStatusFilter/>
                    </div>
                </div>
                <TodoList todoData={this.state.todoData} updateStatus={this.updateStatus}/>
                <AddTodoItem/>
            </div>
        )
    }

}

export default App;