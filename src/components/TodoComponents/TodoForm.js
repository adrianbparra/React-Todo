import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state={
            todoItem : "",
        }
    }


    handleSubmit = e =>{
        e.preventDefault();

        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={()=>{
                    
                }} />
                <button type="submit" >Add ToDo</button>

            </form>
        )
    }




}

export default TodoForm;