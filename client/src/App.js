import {get} from 'axios'
import React from 'react'
import './App.css';

class App extends React.Component {

constructor(props){
super(props)
this.state={
name:"default"
}
}

componentDidMount(){
	get('http://localhost:8080').then(res=>{
	this.setState({name:res.data.name})
})
.catch(e=>{console.log(e)})

}

render(){  
return (
    <div className="App">
      <header className="App-header">
	        <h1>{this.state.name}</h1>
   </header>
    </div>
  );
}
}

export default App;
