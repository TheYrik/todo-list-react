import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {
	const [userInput, setUserInput] = useState('')

	const handleChange = event => {
		setUserInput(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		addTask(userInput)
		setUserInput('')
	}

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input
				className='todo-input'
				type='text'
				placeholder='Введите новую задачу'
				onChange={handleChange}
				value={userInput}
			></input>
			<button className='todo-button'>Save</button>
		</form>
	)
}

export default TodoForm
