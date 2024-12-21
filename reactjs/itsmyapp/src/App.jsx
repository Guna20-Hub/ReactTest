/*import Test1 from "./components/Test1"
import Test2 from "./components/Test2"
const App =()=> {
  return (
    <div>
        <ArrowNestedFunction/>
        <Test1/>     
        <Test2/>   
    </div>
  )
}

const ArrowNestedFunction =()=> {
  return(
    <div>
      <b>This is nested function in reactjs</b>
    </div>
  )
}

export default App; */


// To execute class component the App.jsx should have class componet... since my test3 in componets is class componet i am executind it...


/*import { Component } from "react";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
class App extends Component{
  render(){
    return(
      <div>
        <Test3/>
        <Test4/>
        <Test5/>
      </div>
    )
  }
}
class Test5 extends Component{
  render() {
    return (
      <div>
        <u>nested class componet test5</u>
      </div>
    )
  }
}

export default App;*/

//sending properties to Sp file
/*import Sp from './components/Sp'
function App(){
  return(
    <div>
      <Sp empid='111' empName='Guna'/>
      <Sp empid='222' empName='Sindhuja'/>
    </div>
  )
}
export default App;*/

//adding action i.e button with single and double click
/*import Event from "./components/Event"
function App(){
  return(
    <div>
      <Event/>
    </div>
  )
}
export default App;*/

import React from 'react' //default when we enter rafce
import IncreseConsole from './components/IncreaseConsole'
const App = () => {
  return (
    <IncreseConsole/>
  )
}

export default App