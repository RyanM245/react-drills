import React, {Component} from 'react';
import './App.css'
import Todo from './Todo'

class App extends Component{
  constructor(){
    super()
    this.state = {
      input: "",
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addToList = this.addToList.bind(this)
  }


  handleChange(value){
    this.setState({
      input: value
    })
  }

  addToList(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

 



  render(){
    let list = this.state.list.map((el,i)=> {
      return <Todo key={i} task = {el}/>
    })
    return (
      <div className='App' >
        <h1>My todo list:</h1>
        <input value = {this.state.input} 
        placeholder = "Enter New Task"
        onChange = {e => this.handleChange(e.target.value)}/>
        <button onClick = {this.addToList}>ADD</button>
        {list}
      </div>
    );
  }
}

export default App;
