import React from "react";

class ToDo extends React.Component {


    render(){
        return(
        <div className={this.props.completed ? "completed": ""}>{this.props.task}</div>
        )
    }
}

export default ToDo;