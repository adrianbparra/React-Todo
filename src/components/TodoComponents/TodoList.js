// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo.js"



class TodoList extends React.Component{


   

    render(){
        return(
            <div>
                {this.props.todoList.map(
                    (todoItem) => {
                    return <ToDo key={todoItem.id} completed = {todoItem.completed} task = {todoItem.task} />
                    })
                }
            </div>
        )
    }
}


export default TodoList;