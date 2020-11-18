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
console.log(res)
})
.catch(e=>{console.log(e)})

}

render(){  
return (
    <div className="App">
      <header className="App-header">
	        
   </header>
    </div>
  );
}
}

export default App;
