import './App.css'
import Nav from './Components/Nav'
import Button from './Components/Button'
import Todo from './Components/Todo'
import React, { useState, useRef } from 'react'


function App() {

  const [Input, setInput] = useState([])
  
  const focusOn=useRef()

  
  const [fix, setFix] = useState([])


  function display(event) {


    // focusOn.current.value = null

        if (event.keyCode === 13) {
          // alert("Enter key pressed!!!!!")
          return (
            setFix(prev => prev = Input),
            focusOn.current.focus()
          )
        }
   }

  return (
      <div className="App">

        <Nav/>

        <input 
        ref={focusOn}
        type='text' 
        onChange={e => setInput(e.target.value)} 
        onKeyUp={display}
        placeholder='todo'
        />

        <Button onClick={display}/>

        <Todo element={fix}/>

      </div>
   )
}

export default App;
