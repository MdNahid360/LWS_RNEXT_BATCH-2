import { useState } from "react"

/* eslint-disable react/prop-types */
const TodoList = ({ onChangeTask, onDelete, todo }) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    onChange={(e) => {
                        onChangeTask({
                            ...todo,
                            text: e.target.value
                        })
                    }}
                    value={todo?.text}
                    type="text" />
                <button onClick={() => setIsEditing(false)} type="button">Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                <div>{todo?.text}</div>
                <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return (
        <div className="todo-list">
            <input
                checked={todo?.done}
                onChange={(e) => {
                    onChangeTask({
                        ...todo,
                        done: e.target.checked
                    })
                }}
                type="checkbox"
                name="todo"
                id="todo"
            />
            {taskContent}
            <button onClick={() => onDelete(todo?.id)} type="button">Delete</button>
        </div>
    )
}

export default TodoList
