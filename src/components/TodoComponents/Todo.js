import React from "react";

class ToDo extends React.Component {





    render(){
        return(
        <div 
            // style={`"color: ${this.props.todoItem.completed ? "red" : "green"};"`}
            className={this.props.todoItem.completed? "completed": ""}

            onClick={()=>this.props.toggleCompleted(this.props.todoItem.id)}
        >
            <p>{this.props.todoItem.task}</p>
        </div>
        )
    }
}

export default ToDo;