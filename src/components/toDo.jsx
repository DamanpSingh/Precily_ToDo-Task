import React, { Component } from 'react';
import Tasck from './tasck/tasck'
import ToDoDetail from './toDoDetail/toDoDetail';
class ToDo extends Component {
   
    state = {
        tascks:[{id:1, value:"TO-DO 1"}],
        isAddTask: false,
        isDetailView: false,
        isToDoList: true
    }

    addToDoHandler = ()=>{
        //launch modal and update state
        
    }

    renderToDoDetails=()=>{
        this.setState({
            isAddTask: false,
            isDetailView: true,
            isToDoList: false
        })
        return(
            <ToDoDetail id={this.state.id}/>
        );
    }

    renderToDoList = ()=>{
        if(!this.state.isDetailView){
            return (
                <div onClick = {()=> this.renderToDoDetails()}>
                <button onClick={()=>this.addToDoHandler()}>Add Tasck</button>
                {this.state.tascks.map(tasck=> <Tasck id={tasck.id} value={tasck.value}></Tasck>)}
                </div>
            );
        }
    
    }

    renderAddTask=()=>{
        this.setState({
            isAddTask: true,
            isDetailView: false,
            isToDoList: false
        })
    }
    handleRender= ()=>{
        if(this.state.isToDoList) renderToDoList();
        else if(this.state.isDetailView) renderToDoDetails();
        else if(this.state.isAddTask) renderAddTask();
    }
    render() { 
        return (
           {handleRender()}
        );
    }
}
 
export default ToDo;