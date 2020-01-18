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


      searchResults: [],
      todoList : []
    }
  }

  componentDidMount(){

    let toDoListLocal = localStorage.getItem("list");

    let toDoArray = JSON.parse(toDoListLocal);
    // console.log(toDoListLocal)

    if(toDoArray !== null){
      this.setState({
        ...this.state,
        todoList : toDoArray.todoList,
        searchResults : toDoArray.searchResults,
      })
    }

  }


  componentDidUpdate(){

    console.log("didupdate")

    let string = []

    string = JSON.stringify(this.state)
    // console.log("didupdate",string)
    localStorage.setItem("list", string)

    // if(this.state.todoList.length < 1){
    //   console.log("inside if")
    //   let arrayOBj = []
    //   string = JSON.stringify(arrayOBj)
    //   localStorage.setItem("list", string)
    // } else {
    //   string = JSON.stringify(this.state.todoList)
    //   localStorage.setItem("list", string)
    //   console.log("inside if")
    // }

    

    // console.log(string)

    

  }


  searchTask = (searchTerm) => {

    // if(searchTerm === ""){
    //   this.setState({
    //     ...this.state,
    //     searchResults : this.state.todoList
    //   })
    // }

    console.log("inside searchTask----Search Term:",searchTerm)
    const newResults = this.state.todoList.filter(items => {
      
      console.log("inside filter search",items.task)
      return items.task.toLowerCase().includes(searchTerm.toLowerCase());
    })

    console.log("found", newResults)
    this.setState({
      ...this.state,
      searchResults : newResults,
    })


  }

  addTodoTask = (note) => {

    console.log("inside addtodo task app",note)

    const newNote = {task: note, id: Date.now(), completed: false}

    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        newNote
      ],
      searchResults : [
        ...this.state.searchResults,
        newNote
      ]
    }

    this.setState(newState)
    
  }

  toggleCompleted =(id)=> {
    console.log("id toggle complete",id)


    const newState = {
      
      todoList: this.state.todoList.map(task => {
        if(task.id === id){
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task
      }),
      searchResults : this.state.searchResults.map(task => {
        if(task.id === id){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
      

    }

    this.setState(newState);

  }

  clearCompleted = () => {
    console.log("clear completed in app")

    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        if(!task.completed){
          return task
        }
        return
      }),

      searchResults : this.state.searchResults.filter(task => {
        if(!task.completed){
          return task
        }
        return
      }),
    }

    this.setState(newState)
  }

  

  render() {
    return (
      <div className="main">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodoTask={this.addTodoTask} clearCompleted={this.clearCompleted} searchTask={this.searchTask}/>
        <TodoList todoList={this.state.searchResults} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
