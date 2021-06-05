
import { useState, useEffect } from 'react'
import Todos from './Todos'

function Todo({ element }) {

	const [array, setArray] = useState([])

	useEffect ((array) => {
		setArray((prev) => { prev.push(element)
			console.log(array)
			return prev})},[element])



	return (
		<>
			<Todos click={array} />
		</>
	)
}

export default Todo