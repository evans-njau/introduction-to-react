import { Component } from 'react';
import './App.css';
//import Greet from './component/greet';
//import Welcome from './component/welcome'
//import Counter from './component/counter';
import Fun from './component/funDestructuring';
import AllofEm from './component/destructuring';
class App extends Component{
  render(){
    return(
      <div className='comps'>
        <AllofEm name="Drew Mcintyre" job="wrestler"/>
        <Fun name="Evans" age="13" />
        {/*<Welcome/>*/}
        {/*<Counter />*/}
      </div>
    )
  }
} 

export default App;
