import { useRef } from 'react'
import Edit from './Edit'
import Delete from './Delete'

function Todos({ click }) {
	const inputref = useRef()
	console.log(inputref.current)



	function editinputfield(click, clicks) {
		inputref.current.contentEditable = true
	}

	function endedit() {
		inputref.current.contentEditable = false
	}

	return (
		<>
			{ click.map((clicks) => 
				<>
					<h1 ref={inputref} key={click.indexOf(clicks)}> 
						{click.indexOf(clicks)} {clicks
						} <Edit click={editinputfield} rowid={click.indexOf(clicks)}
						/> <Delete click={endedit}/>
					</h1>
				</>
				) 
			}
		</>
	)
}

export default Todos