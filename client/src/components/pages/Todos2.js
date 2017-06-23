import React, { Component } from 'react'
import Navbar from './../navbar'
import $ from 'jquery'
import MyDate from '../date'

class Todo extends Component {
  state = {
    todos: [],
  };


var TodoItem = React.createClass({
  done: function() {
    this.props.done(this.props.todo);
  },

  render: function() {
    return <li onClick={this.done}>{this.props.todo}</li>
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      todos: this.props.todos
    };
  },

  add: function() {
    var todos = this.props.todos;
    todos.push(React.findDOMNode(this.refs.myInput).value);
    React.findDOMNode(this.refs.myInput).value = "";
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  },

  done: function(todo) {
    var todos = this.props.todos;
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  },

  render: function() {
    return (
      <div>
        <h1>Todos: {this.props.todos.length}</h1>
        <ul>
        {
          this.state.todos.map(function(todo) {
            return <TodoItem todo={todo} done={this.done} />
          }.bind(this))
        }
        </ul>
        <input type="text" ref="myInput" />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
});

var todos = JSON.parse(localStorage.getItem('todos')) || [];


export default Todo
