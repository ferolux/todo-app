import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddTodoItem from "../AddTodoItem";

import "./App.css";

class App extends React.Component {

    state = {
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
                label: "Покушать кашу",
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
        })
    }


    render() {

        console.log(this.state.todoData);

        return (
            <div className="app">
                <AppHeader todo={1} done={3}/>
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