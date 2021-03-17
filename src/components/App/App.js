import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddTodoItem from "../AddTodoItem";

import "./App.css";

class App extends React.Component {

    state = {
        inputAddValue: "",
        inputSearchValue: "",
        filterId: 1,
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

    changeInput = (value, inputName) => {
        this.setState({
            [inputName]: value
        })
    }

    addTodoItem = () => {
        const todoIdItems = this.state.todoData.map(el => el.id);
        const id = Math.max(...todoIdItems) + 1
        this.setState((state) => {
            return {
                ...state,
                inputAddValue: "",
                filterId: 1,
                inputSearchValue: "",
                todoData: [
                    ...this.state.todoData,
                    {
                        id: id,
                        label: this.state.inputAddValue,
                        statuses: {
                            "1": {statusName: "ok", status: false},
                            "2": {statusName: "del", status: false},
                            "3": {statusName: "important", status: false}
                        }
                    },
                ]
            }
        });
    }

    todoSearch = (inputSearchValue, todoData) => {
        if(inputSearchValue.length === 0) {
            return todoData;
        }
        return todoData.filter(el => el.label.toLowerCase().indexOf(inputSearchValue.toLowerCase()) > -1)
    }

    todoFilter = (filterId, todoData) => {
        switch (filterId) {
            case 1:
                return todoData.filter(el => !el.statuses[2].status)
            case 2:
                return todoData.filter(el => !el.statuses[1].status && !el.statuses[2].status);
            case 3:
                return todoData.filter(el => el.statuses[1].status && !el.statuses[2].status);
            default:
                return todoData;
        }
    }

    changeTodoFilter = (filterId) => {
        this.setState({
            filterId
        })
    }


    render() {
        const {todoData, inputAddValue, inputSearchValue, filterId} = this.state;
        const todoCount = this.updateTodoCount();
        const doneCount = this.updateDoneCount();
        const todosVisible = this.todoFilter(filterId, this.todoSearch(inputSearchValue, todoData)).reverse();

        return (
            <div className="app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="app__top-panel">
                    <div className="top-panel">
                        <SearchPanel changeInput={this.changeInput}/>
                        <ItemStatusFilter changeTodoFilter={this.changeTodoFilter} filterId={filterId}/>
                    </div>
                </div>
                <TodoList todoData={todosVisible} updateStatus={this.updateStatus}/>
                <AddTodoItem
                    inputAddValue={inputAddValue}
                    changeInput={this.changeInput}
                    addTodoItem={this.addTodoItem}
                />
            </div>
        )
    }

}

export default App;