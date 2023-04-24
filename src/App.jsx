import React, { useReducer } from 'react'
import { ReactDOM } from 'react-dom/client'

const initialTodos = [
	{
		id: 1,
		title: '',
		complete: false,
	},
]

const reducer = (state, action) => {
	switch (action.type) {
		case 'COMPLETE':
			return state.map(todo => {
				if (todo.id === action.id) {
					return { ...todo, complete: !todo.complete }
				} else {
					return todo
				}
			})
		default:
			return state
	}
}

function App() {
	const [todos, dispatch] = useReducer(reducer, initialTodos)

	const handleComplete = todo => {
		dispatch({ type: 'COMPLETE', id: todo.id })
	}

	return (
		<>
			{todos.map(todo => (
				<div
					key={todo.id}
					className='text-center bg-green-400 m-2 p-2 w-[300px] h-[350px] '
				>
					<label className=''>
						<input
							type='text'
							onChange={() => handleComplete(todo)}
							className='my-2 mx-2 rounded-md'
						/>
						<button onClick={() => state.id} className='bg-red-600 rounded-md'>
							Submit
						</button>
						{todo.title}
					</label>
				</div>
			))}
			{/* <Submit />
			<Delete /> */}
		</>
	)
}

export default App
