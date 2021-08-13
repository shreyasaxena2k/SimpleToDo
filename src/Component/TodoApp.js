import React, { Component } from 'react'
import List from './List';
import Input from './input';
export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            task: ["make a", "make b", "make c"],
            currInp: ""
        }
    }
    handleCurrInput = (value) => {
        this.setState({ currInp: value });
    };

    handleTasks = () => {
        this.setState({
            task: [...this.state.task, this.state.currInp],
            currInp: "",
        });
    };
    deleteFun=(el)=> {
        let currTaskArr = this.state.task
        let filteredArr = currTaskArr.filter((ele) => {
            return ele != el
        })

        this.setState({
            task: filteredArr
        })

    }
    render() {
        return (
            <div className="container">
                <Input
                    handleCurrInput={this.handleCurrInput}
                    handleTasks={this.handleTasks}
                    currInput={this.state.currInp}
                />
                <List task={this.state.task} deleteTask={this.deleteFun} />
            </div>
        )
    }
}
