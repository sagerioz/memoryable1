import React, { Component } from 'react'
import axios from 'axios'
import MyDate from './date'

console.clear();

const Title = ({todoCount}) => {
  return (
    <div>
       <div>
          <h4>Type here and press enter</h4>
       </div>
    </div>
  );
}

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.list_item}</a>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      id: ''
    }
  }

  // Lifecycle method
  componentDidMount(){
    this.setState({ id: localStorage.id })
    fetch('/api/todos', {
           method: 'GET'
         }).then(res => {
     return res.text().then((doItems) => {
       doItems = JSON.parse(doItems)
    //console.log("TODOS", doItems);
       let listItems = doItems.filter(entry => {
         return entry.user_id == this.state.id
       });

       this.setState({
         data: listItems
      });
        //console.log("TODO LIST ARRAY", this.state.data);
      })
 })
}

  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {todo: val}
    // Update data
    axios.post(`/api/todos/` + this.state.id, todo)
       .then((res) => {
        // console.log("ARE U HERE?", res);
         let listItem = res.data.todo[0]
         //console.log("YOU NEED THIS ONE: ", listItem);
          this.state.data.push(listItem);
          this.componentDidMount()
          //this.setState({data: this.state.data});
          //console.log(this.state);
       });
  }
  // Handle remove
  handleRemove(id){

    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter

    fetch('api/todos'+'/'+id, {
      method: 'DELETE'
    }).then((res) => {
      console.log("CHECK IT", res);
      this.setState({data: remainder});
    })
    this.componentDidMount()



    // axios.delete('api/todos'+'/'+id)
    //   .then((res) => {
    //     console.log("CHECK IT", res);
    //     this.setState({data: remainder});
    //     console.log("THE FINAL STATE",this.state);
    //   })
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp
