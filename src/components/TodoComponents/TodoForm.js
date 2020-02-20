import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state={
            todoItem : "",
            searchTerm : ""
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

        this.props.clearCompleted()
        console.log("clear completed")

        
    }
    handleSearch = e => {
        // this.setState({
        //     ...this.state,
        //     searchTerm : e.target.value
        // })

        console.log("handle Search: ", e.target.value)

        this.props.searchTask(e.target.value);

        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input className="search" type="text" name="searchTerm" value={this.state.search} onChange={this.handleSearch} placeholder="Search"/>
                <input className="item" type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChanges} placeholder="Enter Task"/>
                
                <button className="add_btn">Add ToDo</button>
                <button className="search_btn" onClick={this.handleClearCompleted}>Clear Completed</button>
            </form>
        )
    }




}

export default TodoForm;