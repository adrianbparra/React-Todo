import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./styles.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state={



      todoList : []
    }
  }

  addTodoTask = (note) => {

    console.log(note)

    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        {task: note, id: Date.now(), completed: false}
      ]
    }

    this.setState(newState)
    
  }

  toggleCompleted =(id)=> {
    console.log(id)


    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if(task.id === id){
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task
      })

    }

    this.setState(newState);

    console.log(this.state.todoList)

  }

  clearCompleted = () => {
    console.log("clear completed in app")

    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        if(!task.completed){
          return task
        }
      })
    }

    this.setState(newState)
  }

  

  render() {
    return (
      <div className="main">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodoTask={this.addTodoTask} clearCompleted={this.clearCompleted} />
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
