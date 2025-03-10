import React from 'react'
import { IoTrashBinOutline } from 'react-icons/io5'

const TodoItem = ({ todo, toggleTask, removeTask }) => {
	return (
		<div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
			<div className='todo-row-main' onClick={() => toggleTask(todo.id)}>
				{todo.task}
			</div>
			<div className='iconsContainer'>
				<IoTrashBinOutline onClick={() => removeTask(todo.id)} />
			</div>
		</div>
	)
}

export default TodoItem;
