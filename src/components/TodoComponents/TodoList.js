// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo.js"



class TodoList extends React.Component{


   

    render(){
        return(
            <ul>
                {this.props.todoList.length < 1 ? "Add Some Notes" : this.props.todoList.map(
                    (todoItem) => {
                    return <ToDo key={todoItem.id} todoItem = {todoItem} toggleCompleted={this.props.toggleCompleted}/>
                    })
                }
            </ul>
        )
    }
}


export default TodoList;