import './App.css'
import Nav from './Components/Nav'
import Button from './Components/Button'
import Todos from './Components/Todos'
import React, { useState, useRef, useEffect } from 'react'


function App() {
  

    const refInput=useRef()

    const [Todolist, setTodolist] = useState([])


    // const [keycount, setKeycount] = useState(0)/*make keycount globelly, so that after refresh, the count 
    // remains same and don't start from 0*/


    function buttononClick(event) {
        
        if ( refInput.current.value === '' ){ return null }


        if (event.keyCode === 13) {
            setTodolist((prev) => {
                const TodoLocalStorage = JSON.parse(localStorage.getItem('Todovalue'))
                TodoLocalStorage.push(refInput.current.value)
                localStorage.setItem('Todovalue', JSON.stringify(TodoLocalStorage))
                prev = [...prev, refInput.current.value]
                return (prev)
            })

            setTimeout(() => { refInput.current.value = null }, 1000)
            refInput.current.focus()
        }
    }


    useEffect(() => {
        localStorage.setItem('Todovalue', '[]')
    },[])




    return (
        <div className="App">

            <Nav/>

            <input ref={refInput} type="text" onKeyUp={buttononClick} className="Input" placeholder='todo'/>

            <Button proponClick={buttononClick}/>

            <Todos Todolist={ Todolist } />

        </div>
    )
}










export default App;
