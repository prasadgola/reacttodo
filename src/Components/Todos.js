// import { useEffect } from 'react'
import Edit from './Edit'
// import Delete from './Delete'


function Todos({ Todolist }) {
	
	// const inputref = useRef()
	// console.log(inputref.current)



	// function editinputfield(click, clicks) {
	// 	inputref.current.contentEditable = true
	// }

	// function endedit() {
	// 	inputref.current.contentEditable = false
	// }

	// const Todos = JSON.parse(localStorage.getItem('Todovalue'))

// after making keycount global, display the Todos/Todovalue object by using the keycount.

	// console.log(todolist)
	// console.log(x)

	return (
		<>
			{Todolist.map((todo) => <h1>{todo} <Edit/> </h1>)}
		</>
	)
}

export default Todos