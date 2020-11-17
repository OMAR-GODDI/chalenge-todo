import React from "react";
import "./App.css";

class App extends React.Component{
  state = {
    todos: [{text: "listen To The Music" ,id:0 , isDone: false },
    {text: "Dance" ,id:1 , isDone: true }, 
  ],
  newText: ""
  };

handleAdd=(text)=>{
  if(text.trim()===""){
    return alert("Invalid")
  }
const newTodo = {text: text ,id:this.state.todos.length,
  isDone: false,
};
this.setState({todos: [...this.state.todos, newTodo]})
this.setState({newText : ""})
};




  handleComplete =(index)=>this.setState(
  {todos : this.state.todos.map((todo)=>todo.id === index ? {...todo , 
    isDone : !todo.isDone} : todo
    ),
  });

  removeToDo =(index) =>this.setState(
    {todos : this.state.todos.filter((todo)=> todo.id!== index),
    });
    handleChange =(event)=>this.setState({newText: event.target.value})
    
  render(){
    return(
    <div className="App"> 
    <form  onSubmit={(a)=> a.preventDefault()}>
      <input
      value={this.state.newText}
      type="text" onChange={(event)=>
      this.setState({newText: event.target.value})} />
      <button  className="btn btn-primary btn-lg"onClick={()=>this.handleAdd(this.state.newText)} >Add</button>
    </form>   
    <div className="todo-list"> 
      {this.state.todos.map((el) =>(
  <div key={el.id}className="todo-Card">
  <p className={el.isDone ? "done" : ""}>{el.text}</p>
  <div>
  <button class="btn btn-secondary btn-lg" onClick={()=> this.removeToDo(el.id)} > Delete</button>
  <button  class="btn btn-primary btn-lg" onClick={()=> this.handleComplete(el.id)}>
    {" "} 
    {el.isDone ?"Undo": "Complete"}</button>
  </div>
      </div>
      ))}
  

  
    </div>
    </div>
    );
  }
}

export default App;
