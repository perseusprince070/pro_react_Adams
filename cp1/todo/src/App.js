// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [{ action: "Buy FLowers", done: false },
                  { action: "Get Shoes", done: false },
                  { action: "Collect Tickets", done: false },
                  { action: "Call Joe", done: false }],
      // newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value })
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems,
          { action: task, done: false}]
      })
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam"
    })
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
  })

  todoTableRows = () => this.state.todoItems.map(item =>
    <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo } />
    )

  render = () =>
    <div>
      <TodoBanner name={ this.state.userName } tasks={ this.state.todoItems } />
      <div className="container-fluid">
        <TodoCreator callback={ this.createNewTodo } />
        <table className="table table-striped tabel-bordered">
          <thead>
            <tr><th>Description</th><th>Done</th></tr>
          </thead>
          <tbody>{ this.todoTableRows() }</tbody>
        </table>
      </div>
    </div>
}