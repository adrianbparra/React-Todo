import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state={
            todoItem : ""
        }
    }

    handleChanges = e => {
        this.setState({...this.state, todoItem: e.target.value});
        console.log(this.state);
    }


    handleSubmit = e =>{
        e.preventDefault();

        if(this.state.todoItem=== ""){
            return
        }

        this.props.addTodoTask(this.state.todoItem);

        this.setState({...this.state, todoItem: ""})
    }

    handleClearCompleted = e => {
        e.preventDefault();

        
        console.log("clear completed")
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChanges} />
                <button>Add ToDo</button>
                <button onClick={this.handleClearCompleted}>Clear Completed</button>
            </form>
        )
    }




}

export default TodoForm;