import React from 'react';

export default function GameToDoItem({ toDoItem, deleteToDoItem }) {
	// const handleClick = (e) => {
	// 	handleToggle(e.currentTarget.id);
	// };

	const deleteToDo = (e) => {
		const toDoItemToDelete = {
			toDoItemId: e.currentTarget.id,
		};
		deleteToDoItem(toDoItemToDelete);
	};

	return (
		<div className="form-check border-bottom my-2 pb-2 d-flex gap-2">
			<label
				className={`form-check-label px-2 flex-grow-1 my-auto`}
				htmlFor={toDoItem.id}
			>
				{toDoItem.toDoItemName}
			</label>

			<button
				type="button"
				className="btn btn-secondary btn-sm"
				id={toDoItem.id}
				onClick={deleteToDo}
			>
				&times;
			</button>
		</div>
	);
}